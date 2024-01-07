import type { Meta, StoryObj } from '@storybook/svelte'
import ShoppingBagSvelte from '../../../lib/16/solid/shopping-bag.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ShoppingBagSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ShoppingBagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingBag: Story = {}
