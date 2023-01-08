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
		.replace('.svg.svelte', '')
		.toLowerCase()
		.replace(/(?:^|\b)./g, m => m.toUpperCase())
		.replaceAll('-', '')
}

function sveltify(dir: string) {
	const svgFiles = readdirSync(dir)

	for (const file of svgFiles) {
		const path = join(dir, file)

		const svg =
			'<script lang="ts">let className = \'\'; export {className as class}</script>' +
			readFileSync(path, 'utf8').replace('<svg', '<svg class={className} ')

		writeFileSync(`${path}.svelte`, svg)
		rmSync(path)
	}

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

execSync('pnpm format')
execSync('pnpm package')
