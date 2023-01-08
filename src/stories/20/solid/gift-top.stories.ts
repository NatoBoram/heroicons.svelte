import type { Meta, StoryObj } from '@storybook/svelte'
import { GiftTop as GiftTopSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: GiftTopSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<GiftTopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const GiftTop: Story = {}
