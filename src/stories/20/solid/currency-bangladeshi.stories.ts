import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyBangladeshiSvelte from '../../../lib/20/solid/currency-bangladeshi.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CurrencyBangladeshiSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyBangladeshiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyBangladeshi: Story = {}
