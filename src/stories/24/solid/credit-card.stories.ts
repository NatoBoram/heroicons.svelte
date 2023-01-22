import type { Meta, StoryObj } from '@storybook/svelte'
import CreditCardSvelte from '../../../lib/24/solid/credit-card.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CreditCardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CreditCardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard: Story = {}
