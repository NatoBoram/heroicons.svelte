import type { Meta, StoryObj } from '@storybook/svelte'
import PauseCircleSvelte from '../../../lib/24/outline/pause-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PauseCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PauseCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PauseCircle: Story = {}
