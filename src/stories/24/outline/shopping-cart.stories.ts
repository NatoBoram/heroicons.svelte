import type { Meta, StoryObj } from '@storybook/svelte'
import { ShoppingCart as ShoppingCartSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ShoppingCartSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ShoppingCartSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ShoppingCart: Story = {}
