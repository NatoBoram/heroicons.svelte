import type { Meta, StoryObj } from '@storybook/svelte'
import { PlayPause as PlayPauseSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PlayPauseSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlayPauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayPause: Story = {}
