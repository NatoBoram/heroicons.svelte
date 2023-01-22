import type { Meta, StoryObj } from '@storybook/svelte'
import CreditCardSvelte from '../../../lib/24/outline/credit-card.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CreditCardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CreditCardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard: Story = {}
