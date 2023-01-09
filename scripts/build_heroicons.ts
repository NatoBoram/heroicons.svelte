import { cp, mkdir, readFile, readdir, rm, writeFile } from 'fs/promises'
import { execSync } from 'node:child_process'
import { join } from 'path'

// Copy heroicons
await rm('src/lib/heroicons', { recursive: true })
await mkdir('src/lib/heroicons')
await Promise.all([
	cp('node_modules/heroicons/20', 'src/lib/heroicons/20', { recursive: true }),
	cp('node_modules/heroicons/24', 'src/lib/heroicons/24', { recursive: true }),
])

function modulify(file: string): string {
	return file
		.replace('.svg', '')
		.replace('.svelte', '')
		.toLowerCase()
		.replace(/(?:^|\b)./g, m => m.toUpperCase())
		.replaceAll('-', '')
}

function namify(file: string): string {
	return file.replace('.svg', '').replace('.svelte', '')
}

async function sveltify(dir: string, className: string) {
	const svgFiles = await readdir(dir)

	// SVG to Svelte
	for (const file of svgFiles) {
		const path = join(dir, file)

		const svg = `<script lang="ts">
	let className = '${className}'
	export { className as class }
</script>

${(await readFile(path, 'utf8')).replace('<svg', '<svg class={className} ')}`

		await Promise.all([writeFile(`${path.replace('.svg', '')}.svelte`, svg), rm(path)])
	}

	// Index
	const svelteFiles = await readdir(dir)
	const imports = svelteFiles.map(file => `import ${modulify(file)} from './${file}'`).join('\n')
	const exports = `export { ${svelteFiles.map(modulify).join(', ')} }`
	await writeFile(join(dir, 'index.ts'), `${imports}\n${exports}`)
}

await Promise.all([
	sveltify('src/lib/heroicons/20/solid', 'w-5 h-5'),
	sveltify('src/lib/heroicons/24/outline', 'w-6 h-6'),
	sveltify('src/lib/heroicons/24/solid', 'w-6 h-6'),
])

async function indexify(dir: string) {
	const folders = await readdir(dir)
	const exports = folders.map(folder => `export * as ${modulify(folder)} from './${folder}'`)
	await writeFile(join(dir, 'index.ts'), exports.join('\n'))
}

await Promise.all([indexify('src/lib/heroicons/20'), indexify('src/lib/heroicons/24')])

async function storify(size: number, variant: string, title: string, className: string) {
	const svelteDir = join('src', 'lib', 'heroicons', size.toString(), variant)
	const storiesDir = join('src', 'stories', size.toString(), variant)
	await mkdir(storiesDir, { recursive: true })

	// Build SVG story
	const svelteFiles = (await readdir(svelteDir)).filter(file => file.endsWith('.svelte'))
	for (const file of svelteFiles) {
		const modulified = modulify(file)
		const modulifiedSvelte = `${modulified}Svelte`

		await writeFile(
			join(storiesDir, `${file.replace('.svelte', '')}.stories.ts`),
			`import type { Meta, StoryObj } from '@storybook/svelte'
import { ${modulified} as ${modulifiedSvelte} } from '../../../lib/heroicons/${size}/${variant}'

const meta = {
	title: 'Heroicons/${title}',
	component: ${modulifiedSvelte},
	args: { class: '${className}' },
} satisfies Meta<${modulifiedSvelte}>

export default meta
type Story = StoryObj<typeof meta>

export const ${modulified}: Story = {}`,
		)
	}

	// Build Icon Gallery story
	await writeFile(
		join('src', 'stories', `${title}.mdx`),
		`import { Meta, Title, IconGallery, IconItem } from '@storybook/addon-docs'
import { ${svelteFiles
			.map(modulify)
			.join(', ')} } from '../lib/heroicons/${size.toString()}/${variant}'

<Meta title="Heroicons/${title}" />

# ${title}

<IconGallery>
${svelteFiles
	.map(
		file => `	<IconItem name="${namify(file)}">
		<${modulify(file)} />
	</IconItem>`,
	)
	.join('\n')}
</IconGallery>`,
	)
}

await Promise.all([
	rm(join('src', 'stories', '20'), { recursive: true, force: true }),
	rm(join('src', 'stories', '24'), { recursive: true, force: true }),
])

await Promise.all([
	storify(20, 'solid', 'Mini', 'w-5 h-5'),
	storify(24, 'outline', 'Outline', 'w-6 h-6'),
	storify(24, 'solid', 'Solid', 'w-6 h-6'),
])

execSync('pnpm format')
execSync('pnpm package')
