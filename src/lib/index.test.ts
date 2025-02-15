import { describe, test } from 'vitest'
import { Heroicons, Micro, Mini, Outline, Solid } from './index.ts'

describe('index', () => {
	test('Heroicons', ({ expect }) => {
		expect(Heroicons).toBeDefined()
	})

	test('Micro', ({ expect }) => {
		expect(Micro).toBeDefined()
	})

	test('Mini', ({ expect }) => {
		expect(Mini).toBeDefined()
	})

	test('Outline', ({ expect }) => {
		expect(Outline).toBeDefined()
	})

	test('Solid', ({ expect }) => {
		expect(Solid).toBeDefined()
	})
})
