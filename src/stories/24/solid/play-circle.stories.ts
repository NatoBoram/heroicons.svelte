import type { Meta, StoryObj } from '@storybook/svelte'
import { PlayCircle as PlayCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: PlayCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlayCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayCircle: Story = {}
