import type { Meta, StoryObj } from '@storybook/svelte'
import { PlayPause as PlayPauseSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: PlayPauseSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlayPauseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayPause: Story = {}
