import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyPoundSvelte from '../../../lib/16/solid/currency-pound.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CurrencyPoundSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CurrencyPoundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyPound: Story = {}
