import type { Meta, StoryObj } from '@storybook/svelte'
import GiftTopSvelte from '../../../lib/16/solid/gift-top.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: GiftTopSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<GiftTopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GiftTop: Story = {}
