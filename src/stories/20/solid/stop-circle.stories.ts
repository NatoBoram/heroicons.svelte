import type { Meta, StoryObj } from '@storybook/svelte'
import StopCircleSvelte from '../../../lib/20/solid/stop-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: StopCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<StopCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const StopCircle: Story = {}
