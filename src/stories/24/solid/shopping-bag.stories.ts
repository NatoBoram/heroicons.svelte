import type { Meta, StoryObj } from '@storybook/svelte'
import ShoppingBagSvelte from '../../../lib/24/solid/shopping-bag.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ShoppingBagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShoppingBagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingBag: Story = {}
