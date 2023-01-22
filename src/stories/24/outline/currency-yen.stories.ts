import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyYenSvelte from '../../../lib/24/outline/currency-yen.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CurrencyYenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyYenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyYen: Story = {}
