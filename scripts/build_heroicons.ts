import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
import { execSync } from 'node:child_process'
import { join } from 'path'

// Copy heroicons
execSync('git -C ../../tailwindlabs/heroicons pull')
rmSync('src/lib/heroicons', { recursive: true })
mkdirSync('src/lib/heroicons')
cpSync('../../tailwindlabs/heroicons/optimized/', 'src/lib/heroicons/', { recursive: true })

function modulify(file: string) {
	return file
		.replace('.svg', '')
		.replace('.svelte', '')
		.toLowerCase()
		.replace(/(?:^|\b)./g, m => m.toUpperCase())
		.replaceAll('-', '')
}

function sveltify(dir: string) {
	const svgFiles = readdirSync(dir)

	// SVG to Svelte
	for (const file of svgFiles) {
		const path = join(dir, file)

		const svg =
			'<script lang="ts">let className = \'\'; export {className as class}</script>' +
			readFileSync(path, 'utf8').replace('<svg', '<svg class={className} ')

		writeFileSync(`${path.replace('.svg', '')}.svelte`, svg)
		rmSync(path)
	}

	// Index
	const svelteFiles = readdirSync(dir)
	const imports = svelteFiles.map(file => `import ${modulify(file)} from './${file}'`).join('\n')
	const exports = `export { ${svelteFiles.map(modulify).join(', ')} }`
	writeFileSync(join(dir, 'index.ts'), `${imports}\n${exports}`)
}

sveltify('src/lib/heroicons/20/solid')
sveltify('src/lib/heroicons/24/outline')
sveltify('src/lib/heroicons/24/solid')

function indexify(dir: string) {
	const folders = readdirSync(dir)
	const exports = folders.map(folder => `export * as ${modulify(folder)} from './${folder}'`)
	writeFileSync(join(dir, 'index.ts'), exports.join('\n'))
}

indexify('src/lib/heroicons/20')
indexify('src/lib/heroicons/24')

function storify(size: number, variant: string, title: string, className: string) {
	const svelteDir = join('src', 'lib', 'heroicons', size.toString(), variant)
	const storiesDir = join('src', 'stories', size.toString(), variant)
	mkdirSync(storiesDir, { recursive: true })

	const svelteFiles = readdirSync(svelteDir).filter(file => file.endsWith('.svelte'))
	for (const file of svelteFiles) {
		const modulified = modulify(file)
		const modulifiedSvelte = `${modulified}Svelte`

		writeFileSync(
			join(storiesDir, `${file.replace('.svelte', '')}.stories.ts`),
			`import type { Meta, StoryObj } from '@storybook/svelte'
import { ${modulified} as ${modulifiedSvelte} } from '../../../lib/heroicons/${size}/${variant}'

const meta = {
	title: '${title}',
	component: ${modulifiedSvelte},
	args: { class: '${className}' },
} satisfies Meta<${modulifiedSvelte}>

export default meta
type Story = StoryObj<typeof meta>

export const ${modulified}: Story = {}`,
		)
	}
}

rmSync(join('src', 'stories', '20'), { recursive: true, force: true })
rmSync(join('src', 'stories', '24'), { recursive: true, force: true })

storify(20, 'solid', 'Mini', 'w-5 h-5')
storify(24, 'outline', 'Outline', 'w-6 h-6')
storify(24, 'solid', 'Solid', 'w-6 h-6')

execSync('pnpm format')
execSync('pnpm package')
