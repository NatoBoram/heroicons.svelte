import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyDollarSvelte from '../../../lib/20/solid/currency-dollar.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CurrencyDollarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyDollarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyDollar: Story = {}
