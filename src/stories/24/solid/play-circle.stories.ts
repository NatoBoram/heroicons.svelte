import type { Meta, StoryObj } from '@storybook/svelte'
import PlayCircleSvelte from '../../../lib/24/solid/play-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PlayCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlayCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayCircle: Story = {}
