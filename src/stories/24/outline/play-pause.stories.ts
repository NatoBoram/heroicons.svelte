import type { Meta, StoryObj } from '@storybook/svelte'
import PlayPauseSvelte from '../../../lib/24/outline/play-pause.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PlayPauseSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlayPauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayPause: Story = {}
