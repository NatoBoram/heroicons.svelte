import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyPoundSvelte from '../../../lib/20/solid/currency-pound.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CurrencyPoundSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyPoundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyPound: Story = {}
