import { cp, rm } from 'fs/promises'
import { execSync } from 'node:child_process'
import {
	nodeModulesHeroicons20,
	nodeModulesHeroicons24,
	rmOptions,
	srcLib20,
	srcLib20Solid,
	srcLib24,
	srcLib24Outline,
	srcLib24Solid,
	srcStories20,
	srcStories24,
} from './consts.js'
import { copyReadme, indexify, storify, sveltify } from './utils.js'

console.log(`🚚 Copying Heroicons to \`${srcLib20}\` and \`${srcLib24}\`...`)
await Promise.all([await rm(srcLib20, rmOptions), await rm(srcLib24, rmOptions)])
await Promise.all([
	cp(nodeModulesHeroicons20, srcLib20, rmOptions),
	cp(nodeModulesHeroicons24, srcLib24, rmOptions),
])

console.log('🍷 Turning `.svg` into `.svelte`...')
await Promise.all([
	sveltify(srcLib20Solid, 'w-5 h-5'),
	sveltify(srcLib24Outline, 'w-6 h-6'),
	sveltify(srcLib24Solid, 'w-6 h-6'),
])

console.log(`📇 Adding indexes to \`${srcLib20}\` and \`${srcLib24}\`...`)
await Promise.all([indexify(srcLib20), indexify(srcLib24)])

console.log(`📕 Creating stories...`)
await Promise.all([rm(srcStories20, rmOptions), rm(srcStories24, rmOptions)])
await Promise.all([
	storify(20, 'solid', 'Mini', 'w-5 h-5'),
	storify(24, 'outline', 'Outline', 'w-6 h-6'),
	storify(24, 'solid', 'Solid', 'w-6 h-6'),
])

console.log('📝 Copying `README.md`...')
await copyReadme()

console.log(`🎨 Formatting...`)
execSync('pnpm format')

console.log(`📦 Packaging...`)
execSync('pnpm package')

console.log('🚀 Ready!')
