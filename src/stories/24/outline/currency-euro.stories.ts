import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyEuroSvelte from '../../../lib/24/outline/currency-euro.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CurrencyEuroSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyEuroSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyEuro: Story = {}
