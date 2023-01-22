import type { Meta, StoryObj } from '@storybook/svelte'
import PlayCircleSvelte from '../../../lib/24/outline/play-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PlayCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlayCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayCircle: Story = {}
