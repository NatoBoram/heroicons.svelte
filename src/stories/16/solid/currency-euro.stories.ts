import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyEuroSvelte from '../../../lib/16/solid/currency-euro.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CurrencyEuroSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CurrencyEuroSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyEuro: Story = {}
