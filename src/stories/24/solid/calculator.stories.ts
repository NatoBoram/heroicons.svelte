import type { Meta, StoryObj } from '@storybook/svelte'
import { Calculator as CalculatorSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CalculatorSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CalculatorSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calculator: Story = {}
