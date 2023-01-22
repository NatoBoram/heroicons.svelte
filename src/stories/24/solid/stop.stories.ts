import type { Meta, StoryObj } from '@storybook/svelte'
import StopSvelte from '../../../lib/24/solid/stop.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: StopSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<StopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Stop: Story = {}
