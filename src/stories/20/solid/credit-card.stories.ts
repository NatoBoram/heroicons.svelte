import type { Meta, StoryObj } from '@storybook/svelte'
import { CreditCard as CreditCardSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CreditCardSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CreditCardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CreditCard: Story = {}
