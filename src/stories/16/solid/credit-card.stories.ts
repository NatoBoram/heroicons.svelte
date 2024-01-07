import type { Meta, StoryObj } from '@storybook/svelte'
import CreditCardSvelte from '../../../lib/16/solid/credit-card.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CreditCardSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CreditCardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard: Story = {}
