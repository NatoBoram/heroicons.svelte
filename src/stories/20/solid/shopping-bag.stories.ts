import type { Meta, StoryObj } from '@storybook/svelte'
import ShoppingBagSvelte from '../../../lib/20/solid/shopping-bag.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ShoppingBagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ShoppingBagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingBag: Story = {}
