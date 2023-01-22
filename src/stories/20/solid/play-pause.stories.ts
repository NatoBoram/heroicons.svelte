import type { Meta, StoryObj } from '@storybook/svelte'
import PlayPauseSvelte from '../../../lib/20/solid/play-pause.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PlayPauseSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlayPauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayPause: Story = {}
