import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyBangladeshiSvelte from '../../../lib/24/outline/currency-bangladeshi.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CurrencyBangladeshiSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyBangladeshiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyBangladeshi: Story = {}
