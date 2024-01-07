import type { Meta, StoryObj } from '@storybook/svelte'
import CurrencyYenSvelte from '../../../lib/16/solid/currency-yen.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CurrencyYenSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CurrencyYenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyYen: Story = {}
