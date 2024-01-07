import type { Meta, StoryObj } from '@storybook/svelte'
import GiftSvelte from '../../../lib/16/solid/gift.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: GiftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<GiftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gift: Story = {}
