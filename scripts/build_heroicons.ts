import { cp, rm } from 'fs/promises'
import { execSync } from 'node:child_process'
import {
	nodeModulesHeroicons20,
	nodeModulesHeroicons24,
	rmOptions,
	srcLib16,
	srcLib16Solid,
	srcLib20,
	srcLib20Solid,
	srcLib24,
	srcLib24Outline,
	srcLib24Solid,
	srcStories16,
	srcStories20,
	srcStories24,
} from './consts.ts'
import { copyMarkdown, storify, sveltify } from './utils.ts'

console.log('🔥 Removing previous build...')
await Promise.all([rm(srcLib16, rmOptions), rm(srcLib20, rmOptions), rm(srcLib24, rmOptions)])

console.log(`🚚 Copying Heroicons to \`${srcLib16}\`, \`${srcLib20}\` and \`${srcLib24}\`...`)
await Promise.all([
	cp(nodeModulesHeroicons20, srcLib16, rmOptions),
	cp(nodeModulesHeroicons20, srcLib20, rmOptions),
	cp(nodeModulesHeroicons24, srcLib24, rmOptions),
])

console.log('🍷 Turning `.svg` into `.svelte`...')
await Promise.all([
	sveltify(srcLib16Solid, '1rem', 'solid'),
	sveltify(srcLib20Solid, '1.25rem', 'solid'),
	sveltify(srcLib24Outline, '1.5rem', 'outline'),
	sveltify(srcLib24Solid, '1.5rem', 'solid'),
])

console.log(`📕 Creating stories...`)
await Promise.all([
	rm(srcStories16, rmOptions),
	rm(srcStories20, rmOptions),
	rm(srcStories24, rmOptions),
])
await Promise.all([
	storify(16, 'solid', 'Micro', ''),
	storify(20, 'solid', 'Mini', ''),
	storify(24, 'outline', 'Outline', ''),
	storify(24, 'solid', 'Solid', ''),
])

console.log('📝 Copying `README.md` and `LICENSE.txt`...')
await copyMarkdown()

console.log(`🎨 Formatting...`)
execSync('pnpm run format')

console.log(`📦 Packaging...`)
execSync('pnpm run prepack')

console.log('🚀 Ready!')
