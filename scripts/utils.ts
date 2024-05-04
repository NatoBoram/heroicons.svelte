import { mkdir, readFile, readdir, rm, writeFile } from 'fs/promises'
import { join } from 'path'
import { srcLib, srcStories } from './consts.js'

/** Copies the `README.md` to the `stories` folder. */
export async function copyReadme() {
	return writeFile(
		join(srcStories, 'README.mdx'),
		`import { Meta } from '@storybook/blocks'

<Meta title="README" />

${await readFile('README.md', 'utf8')}`,
	)
}

/** Adds an index file to a directory. */
export async function indexify(dir: string) {
	const folders = await readdir(dir)
	const exports = folders.map(
		folder => `export * as ${modulify(folder)} from './${folder}/index.js'`,
	)
	await writeFile(join(dir, 'index.ts'), `${exports.join('\n')}\n`)
}

/** Turns a filename into a module name. For example, `at-symbol.svg` becomes `AtSymbol`. */
export function modulify(file: string): string {
	return file
		.replace('.svg', '')
		.replace('.svelte', '')
		.toLowerCase()
		.replace(/(?:^|\b)./g, m => m.toUpperCase())
		.replaceAll('-', '')
}

/** Turns a filename into a key for the lazy-loaded component. For example, `at-symbol.svg` becomes
 * `at-symbol`. */
export function namify(file: string): string {
	return file.replace('.svg', '').replace('.svelte', '')
}

/** Creates a story for each Svelte component in a directory. */
export async function storify(size: number, variant: string, title: string, className: string) {
	const svelteDir = join(srcLib, size.toString(), variant)
	const storiesDir = join(srcStories, size.toString(), variant)
	await mkdir(storiesDir, { recursive: true })

	const svelteFiles = (await readdir(svelteDir))
		.filter(file => file.endsWith('.svelte'))
		.filter(file => file != 'Heroicon.svelte')

	for (const file of svelteFiles) {
		const modulified = modulify(file)
		const modulifiedSvelte = `${modulified}Svelte`

		await writeFile(
			join(storiesDir, `${file.replace('.svelte', '')}.stories.ts`),
			`import type { Meta, StoryObj } from '@storybook/svelte'
import ${modulifiedSvelte} from '../../../lib/${size.toString()}/${variant}/${file}'

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
}

/** Turns a directory of SVG files into Svelte components. */
export async function sveltify(dir: string, className: string) {
	const svgFiles = await readdir(dir)

	// SVG to Svelte
	for (const file of svgFiles) {
		const path = join(dir, file)

		const svg = `<script lang="ts">
	let className: string | undefined = '${className}'
	export { className as class }
</script>

${(await readFile(path, 'utf8')).replace('<svg', '<svg class={className} ')}`
		await Promise.all([writeFile(`${path.replace('.svg', '')}.svelte`, svg), rm(path)])
	}

	const svelteFiles = await readdir(dir)

	/** Router component */
	const router = `<script lang="ts">
	let className: string | undefined = undefined
	export { className as class }

	export let icon: keyof typeof components
	$: promise = components[icon]

	const components = {
		${svelteFiles.map(file => `'${namify(file)}': import('./${file}'),`).join('\n\t\t')}
	}
</script>

{#await promise then imported}
	<svelte:component this={imported.default} class={className} />
{/await}
`
	await writeFile(join(dir, 'Heroicon.svelte'), router)
	svelteFiles.push('Heroicon.svelte')

	// Index
	const imports = svelteFiles
		.map(file => `export { default as ${modulify(file)} } from './${file}'`)
		.join('\n')
	await writeFile(join(dir, 'index.ts'), `${imports}\n`)
}
