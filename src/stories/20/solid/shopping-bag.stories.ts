import type { Meta, StoryObj } from '@storybook/svelte'
import { ShoppingBag as ShoppingBagSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ShoppingBagSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ShoppingBagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingBag: Story = {}
