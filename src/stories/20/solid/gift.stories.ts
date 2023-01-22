import type { Meta, StoryObj } from '@storybook/svelte'
import GiftSvelte from '../../../lib/20/solid/gift.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: GiftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GiftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Gift: Story = {}
