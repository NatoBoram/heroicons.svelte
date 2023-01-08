import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyRupee as CurrencyRupeeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CurrencyRupeeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyRupeeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyRupee: Story = {}
