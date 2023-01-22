import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyPoundSvelte from '../../../lib/24/solid/currency-pound.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CurrencyPoundSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyPoundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyPound: Story = {}
