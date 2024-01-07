import type { Meta, StoryObj } from '@storybook/svelte'
import StopCircleSvelte from '../../../lib/16/solid/stop-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: StopCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<StopCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const StopCircle: Story = {}
