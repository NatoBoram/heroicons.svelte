import type { Meta, StoryObj } from '@storybook/svelte'
import ShoppingBagSvelte from '../../../lib/24/outline/shopping-bag.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ShoppingBagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShoppingBagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingBag: Story = {}
