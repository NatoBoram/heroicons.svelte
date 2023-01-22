import type { Meta, StoryObj } from '@storybook/svelte'
import StopCircleSvelte from '../../../lib/24/outline/stop-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: StopCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<StopCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const StopCircle: Story = {}
