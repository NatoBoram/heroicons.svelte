import { cp, mkdir, readFile, readdir, rm, writeFile } from 'fs/promises'
import { execSync } from 'node:child_process'
import { join } from 'path'

const rmOptions = { recursive: true, force: true }

// Paths
const nodeModulesHeroicons20 = join('node_modules', 'heroicons', '20')
const nodeModulesHeroicons24 = join('node_modules', 'heroicons', '24')
const srcLib = join('src', 'lib')
const srcLib20 = join('src', 'lib', '20')
const srcLib24 = join('src', 'lib', '24')
const srcLib20Solid = join('src', 'lib', '20', 'solid')
const srcLib24Outline = join('src', 'lib', '24', 'outline')
const srcLib24Solid = join('src', 'lib', '24', 'solid')
const srcStories = join('src', 'stories')
const srcStories20 = join('src', 'stories', '20')
const srcStories24 = join('src', 'stories', '24')

console.log(`🚚 Copying Heroicons to \`${srcLib20}\` and \`${srcLib24}\`...`)
await Promise.all([await rm(srcLib20, rmOptions), await rm(srcLib24, rmOptions)])
await Promise.all([
	cp(nodeModulesHeroicons20, srcLib20, rmOptions),
	cp(nodeModulesHeroicons24, srcLib24, rmOptions),
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
	const imports = svelteFiles
		.map(file => `export { default as ${modulify(file)} } from './${file}'`)
		.join('\n')
	await writeFile(join(dir, 'index.ts'), `${imports}\n`)
}

console.log('🍷 Turning `.svg` into `.svelte`...')
await Promise.all([
	sveltify(srcLib20Solid, 'w-5 h-5'),
	sveltify(srcLib24Outline, 'w-6 h-6'),
	sveltify(srcLib24Solid, 'w-6 h-6'),
])

async function indexify(dir: string) {
	const folders = await readdir(dir)
	const exports = folders.map(folder => `export * as ${modulify(folder)} from './${folder}'`)
	await writeFile(join(dir, 'index.ts'), `${exports.join('\n')}\n`)
}

console.log(`📇 Adding indexes to \`${srcLib20}\` and \`${srcLib24}\`...`)
await Promise.all([indexify(srcLib20), indexify(srcLib24)])

async function storify(size: number, variant: string, title: string, className: string) {
	const svelteDir = join(srcLib, size.toString(), variant)
	const storiesDir = join(srcStories, size.toString(), variant)
	await mkdir(storiesDir, { recursive: true })

	// Build SVG story
	const svelteFiles = (await readdir(svelteDir)).filter(file => file.endsWith('.svelte'))
	for (const file of svelteFiles) {
		const modulified = modulify(file)
		const modulifiedSvelte = `${modulified}Svelte`

		await writeFile(
			join(storiesDir, `${file.replace('.svelte', '')}.stories.ts`),
			`import type { Meta, StoryObj } from '@storybook/svelte'
import { ${modulified} as ${modulifiedSvelte} } from '../../../lib/${size}/${variant}'

const meta = {
	title: 'Heroicons/${title}',
	component: ${modulifiedSvelte},
	args: { class: '${className}' },
} satisfies Meta<${modulifiedSvelte}>

export default meta
type Story = StoryObj<typeof meta>

export const ${modulified}: Story = {}
`,
		)
	}

	// Build Icon Gallery story
	await writeFile(
		join(srcStories, `${title}.mdx`),
		`import { Meta, Title, IconGallery, IconItem } from '@storybook/addon-docs'
import {
	${svelteFiles.map(modulify).join(',\n\t')},
} from '../lib/${size.toString()}/${variant}'

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
</IconGallery>
`,
	)
}

console.log(`📕 Creating stories...`)
await Promise.all([rm(srcStories20, rmOptions), rm(srcStories24, rmOptions)])
await Promise.all([
	storify(20, 'solid', 'Mini', 'w-5 h-5'),
	storify(24, 'outline', 'Outline', 'w-6 h-6'),
	storify(24, 'solid', 'Solid', 'w-6 h-6'),
])

console.log(`🎨 Formatting...`)
execSync('pnpm format')

console.log(`📦 Packaging...`)
execSync('pnpm package')

console.log('🚀 Ready!')
