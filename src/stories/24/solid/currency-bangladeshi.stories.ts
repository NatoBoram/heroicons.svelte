import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyBangladeshiSvelte from '../../../lib/24/solid/currency-bangladeshi.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CurrencyBangladeshiSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyBangladeshiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyBangladeshi: Story = {}
