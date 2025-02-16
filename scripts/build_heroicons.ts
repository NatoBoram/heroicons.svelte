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
	sveltify(srcLib16Solid, 'w-4 h-4', 'solid'),
	sveltify(srcLib20Solid, 'w-5 h-5', 'solid'),
	sveltify(srcLib24Outline, 'w-6 h-6', 'outline'),
	sveltify(srcLib24Solid, 'w-6 h-6', 'solid'),
])

console.log(`📕 Creating stories...`)
await Promise.all([
	rm(srcStories16, rmOptions),
	rm(srcStories20, rmOptions),
	rm(srcStories24, rmOptions),
])
await Promise.all([
	storify(16, 'solid', 'Micro', 'w-4 h-4'),
	storify(20, 'solid', 'Mini', 'w-5 h-5'),
	storify(24, 'outline', 'Outline', 'w-6 h-6'),
	storify(24, 'solid', 'Solid', 'w-6 h-6'),
])

console.log('📝 Copying `README.md` and `LICENSE.md`...')
await copyMarkdown()

console.log(`🎨 Formatting...`)
execSync('pnpm format')

console.log(`📦 Packaging...`)
execSync('pnpm package')

console.log('🚀 Ready!')
