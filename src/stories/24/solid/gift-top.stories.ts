import type { Meta, StoryObj } from '@storybook/svelte'
import { GiftTop as GiftTopSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: GiftTopSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<GiftTopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GiftTop: Story = {}
