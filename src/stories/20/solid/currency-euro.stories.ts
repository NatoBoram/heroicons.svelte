import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyEuroSvelte from '../../../lib/20/solid/currency-euro.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CurrencyEuroSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyEuroSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyEuro: Story = {}
