import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyRupeeSvelte from '../../../lib/16/solid/currency-rupee.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CurrencyRupeeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CurrencyRupeeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyRupee: Story = {}
