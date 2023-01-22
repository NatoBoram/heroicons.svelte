import type { Meta, StoryObj } from '@storybook/svelte'
import GiftSvelte from '../../../lib/24/outline/gift.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: GiftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GiftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gift: Story = {}
