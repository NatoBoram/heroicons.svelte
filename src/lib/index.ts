import { Solid as Micro } from './16/index.ts'
import { Solid as Mini } from './20/index.ts'
import { Outline, Solid } from './24/index.ts'

interface Heroicons {
	readonly Micro: Micro
	readonly Mini: Mini
	readonly Outline: Outline
	readonly Solid: Solid
}

type Micro = typeof Micro
type Mini = typeof Mini
type Outline = typeof Outline
type Solid = typeof Solid

const Heroicons: Heroicons = { Mini, Outline, Solid, Micro }

export { Heroicons, Micro, Mini, Outline, Solid }
