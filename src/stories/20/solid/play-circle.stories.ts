import type { Meta, StoryObj } from '@storybook/svelte'
import { PlayCircle as PlayCircleSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PlayCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PlayCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayCircle: Story = {}
