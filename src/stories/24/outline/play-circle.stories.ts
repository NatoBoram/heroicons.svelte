import type { Meta, StoryObj } from '@storybook/svelte'
import { PlayCircle as PlayCircleSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: PlayCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PlayCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PlayCircle: Story = {}
