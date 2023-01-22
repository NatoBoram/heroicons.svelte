import type { Meta, StoryObj } from '@storybook/svelte'
import CalculatorSvelte from '../../../lib/24/solid/calculator.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CalculatorSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CalculatorSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calculator: Story = {}
