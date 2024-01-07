import type { Meta, StoryObj } from '@storybook/svelte'
import CalculatorSvelte from '../../../lib/16/solid/calculator.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CalculatorSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CalculatorSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calculator: Story = {}
