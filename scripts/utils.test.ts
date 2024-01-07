import { test } from 'vitest'
import { modulify, namify } from './utils.js'

test('modulify', ({ expect }) => {
	const result = modulify('at-symbol.svg')
	expect(result).toBe('AtSymbol')
})

test('namify', ({ expect }) => {
	const result = namify('at-symbol.svg')
	expect(result).toBe('at-symbol')
})
