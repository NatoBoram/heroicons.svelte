import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyDollarSvelte from '../../../lib/16/solid/currency-dollar.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CurrencyDollarSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CurrencyDollarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyDollar: Story = {}
