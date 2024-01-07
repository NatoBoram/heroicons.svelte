import { CopyOptions, RmOptions } from 'fs'
import { join } from 'path'

export const rmOptions: CopyOptions | RmOptions = { recursive: true, force: true }

export const nodeModulesHeroicons16 = join('node_modules', 'heroicons', '16')
export const nodeModulesHeroicons20 = join('node_modules', 'heroicons', '20')
export const nodeModulesHeroicons24 = join('node_modules', 'heroicons', '24')
export const srcLib = join('src', 'lib')
export const srcLib16 = join('src', 'lib', '16')
export const srcLib20 = join('src', 'lib', '20')
export const srcLib24 = join('src', 'lib', '24')

export const srcLib16Solid = join('src', 'lib', '16', 'solid')
export const srcLib20Solid = join('src', 'lib', '20', 'solid')
export const srcLib24Outline = join('src', 'lib', '24', 'outline')
export const srcLib24Solid = join('src', 'lib', '24', 'solid')
export const srcStories = join('src', 'stories')
export const srcStories16 = join('src', 'stories', '16')
export const srcStories20 = join('src', 'stories', '20')
export const srcStories24 = join('src', 'stories', '24')
