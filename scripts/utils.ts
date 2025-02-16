import { mkdir, readFile, readdir, rm, writeFile } from 'fs/promises'
import { join } from 'path'
import { srcLib, srcStories } from './consts.ts'
import type { Name, Size, Variant } from './enums.ts'

/** Copies the `README.md` to the `stories` folder. */
export async function copyMarkdown() {
	const readme = await markdownify('README.md', 'README')
	const license = (await markdownify('LICENSE.md', 'LICENSE')).replaceAll(
		'<https://fsf.org/>',
		'[https://fsf.org](https://fsf.org)',
	)

	return Promise.all([
		writeFile(join(srcStories, 'README.mdx'), readme),
		writeFile(join(srcStories, 'LICENSE.mdx'), license),
	])
}

/** Adds an index file to a directory. */
export async function indexify(dir: string) {
	const folders = await readdir(dir)
	const exports = folders.map(
		folder => `export * as ${modulify(folder)} from './${folder}/index.ts'`,
	)
	await writeFile(join(dir, 'index.ts'), `${exports.join('\n')}\n`)
}

async function markdownify(path: string, title: string) {
	const file = await readFile(path, 'utf8')
	return `import { Meta } from '@storybook/blocks'

<Meta title="${title}" />

${file}`
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
export async function storify(size: Size, variant: Variant, title: Name, className: string) {
	const svelteDir = join(srcLib, size.toString(), variant)
	const storiesDir = join(srcStories, size.toString(), variant)
	await mkdir(storiesDir, { recursive: true })

	const router = `<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Heroicon from '../../../lib/${size.toString()}/${variant}/Heroicon.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/${title}',
		component: Heroicon,
		tags: ['autodocs'],
		args: { class: '${className}', icon: 'academic-cap' },
	})
</script>

<Story name="${title} Heroicon" />
`

	await writeFile(join(storiesDir, 'Heroicon.stories.svelte'), router)

	const svelteFiles = (await readdir(svelteDir))
		.filter(file => file.endsWith('.svelte'))
		.filter(file => file != 'Heroicon.svelte')

	for (const file of svelteFiles) {
		const modulified = modulify(file)
		const modulifiedSvelte = `${modulified}Svelte`

		const data = `<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ${modulifiedSvelte} from '../../../lib/${size.toString()}/${variant}/${file}'

	const { Story } = defineMeta({
		title: 'Heroicons/${title}',
		component: ${modulifiedSvelte},
		args: { class: '${className}' },
	})
</script>

<Story name="${modulified}" />
`

		await writeFile(join(storiesDir, `${file.replace('.svelte', '')}.stories.svelte`), data)
	}
}

/** Turns a directory of SVG files into Svelte components. */
export async function sveltify(dir: string, className: string, variant: Variant) {
	const svgFiles = await readdir(dir)

	// SVG to Svelte
	for (const file of svgFiles) {
		const path = join(dir, file)

		const svg = `<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'
	type Props = SVGAttributes<SVGSVGElement>
	const { class: className = '${className}', ...rest }: Props = $props()
</script>

${(await readFile(path, 'utf8')).replace('<svg', `<svg {...rest} class="${namify(file)} {className}" `)}`
		await Promise.all([writeFile(`${path.replace('.svg', '')}.svelte`, svg), rm(path)])
	}

	const svelteFiles = await readdir(dir)

	/** Router component */
	const router = `<script lang="ts">
	import Spinner from '$lib/Spinner.svelte'
	import type { SVGAttributes } from 'svelte/elements'

	interface Props extends SVGAttributes<SVGSVGElement> {
		/** The name of the icon to render.
		 * @see https://heroicons.com/${variant} */
		readonly icon: keyof typeof components
	}

	const { class: className = '${className}', icon, ...rest }: Props = $props()

	const components = {
		${svelteFiles.map(file => `'${namify(file)}': () => import('./${file}'),`).join('\n\t\t')}
	}

	const promise = $derived(components[icon]())
</script>

{#await promise}
	<Spinner class={className} {...rest} />
{:then { default: Icon }}
	<Icon class={className} {...rest} />
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
