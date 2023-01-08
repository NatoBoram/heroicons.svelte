import type { Meta, StoryObj } from '@storybook/svelte'
import { CreditCard as CreditCardSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CreditCardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CreditCardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard: Story = {}
