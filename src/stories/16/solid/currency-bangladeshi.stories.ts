import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyBangladeshiSvelte from '../../../lib/16/solid/currency-bangladeshi.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CurrencyBangladeshiSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CurrencyBangladeshiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyBangladeshi: Story = {}
