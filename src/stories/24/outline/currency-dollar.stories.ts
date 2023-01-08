import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyDollar as CurrencyDollarSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CurrencyDollarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyDollarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyDollar: Story = {}
