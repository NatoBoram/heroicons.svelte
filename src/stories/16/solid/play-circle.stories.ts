import type { Meta, StoryObj } from '@storybook/svelte'
import PlayCircleSvelte from '../../../lib/16/solid/play-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PlayCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PlayCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayCircle: Story = {}
