import type { Meta, StoryObj } from '@storybook/svelte'
import StopSvelte from '../../../lib/20/solid/stop.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: StopSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<StopSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Stop: Story = {}
