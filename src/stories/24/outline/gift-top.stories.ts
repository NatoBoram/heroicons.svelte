import type { Meta, StoryObj } from '@storybook/svelte'
import GiftTopSvelte from '../../../lib/24/outline/gift-top.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: GiftTopSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GiftTopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GiftTop: Story = {}
