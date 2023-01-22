import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyDollarSvelte from '../../../lib/24/outline/currency-dollar.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CurrencyDollarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyDollarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyDollar: Story = {}
