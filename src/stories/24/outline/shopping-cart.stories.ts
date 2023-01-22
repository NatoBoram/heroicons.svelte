import type { Meta, StoryObj } from '@storybook/svelte'
import ShoppingCartSvelte from '../../../lib/24/outline/shopping-cart.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ShoppingCartSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShoppingCartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingCart: Story = {}
