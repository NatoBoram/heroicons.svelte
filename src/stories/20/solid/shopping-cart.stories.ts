import type { Meta, StoryObj } from '@storybook/svelte'
import ShoppingCartSvelte from '../../../lib/20/solid/shopping-cart.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ShoppingCartSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ShoppingCartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingCart: Story = {}
