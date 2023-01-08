import type { Meta, StoryObj } from '@storybook/svelte'
import { Calculator as CalculatorSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CalculatorSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CalculatorSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calculator: Story = {}
