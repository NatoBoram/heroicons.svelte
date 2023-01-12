import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyEuro as CurrencyEuroSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CurrencyEuroSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyEuroSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyEuro: Story = {}
