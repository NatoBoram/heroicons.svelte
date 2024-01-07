import type { Meta, StoryObj } from '@storybook/svelte'
import ShoppingCartSvelte from '../../../lib/16/solid/shopping-cart.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ShoppingCartSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ShoppingCartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingCart: Story = {}
