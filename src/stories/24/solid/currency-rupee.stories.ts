import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyRupee as CurrencyRupeeSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CurrencyRupeeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyRupeeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyRupee: Story = {}
