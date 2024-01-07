import type { Meta, StoryObj } from '@storybook/svelte'
import PlayPauseSvelte from '../../../lib/16/solid/play-pause.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PlayPauseSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PlayPauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayPause: Story = {}
