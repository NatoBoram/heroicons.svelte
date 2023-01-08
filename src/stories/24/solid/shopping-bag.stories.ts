import type { Meta, StoryObj } from '@storybook/svelte'
import { ShoppingBag as ShoppingBagSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ShoppingBagSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShoppingBagSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingBag: Story = {}
