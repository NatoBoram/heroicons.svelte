export type Name = (typeof names)[keyof typeof names]
export type Size = (typeof sizes)[keyof typeof sizes]
export type Variant = (typeof variants)[keyof typeof variants]

export const names = { Micro: 'Micro', Mini: 'Mini', Outline: 'Outline', Solid: 'Solid' } as const
export const sizes = { 16: 16, 20: 20, 24: 24 } as const
export const variants = { outline: 'outline', solid: 'solid' } as const
