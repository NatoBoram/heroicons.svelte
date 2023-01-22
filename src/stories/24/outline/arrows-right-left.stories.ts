import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsRightLeftSvelte from '../../../lib/24/outline/arrows-right-left.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowsRightLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsRightLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsRightLeft: Story = {}
