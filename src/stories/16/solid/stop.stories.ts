import type { Meta, StoryObj } from '@storybook/svelte'
import StopSvelte from '../../../lib/16/solid/stop.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: StopSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<StopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Stop: Story = {}
