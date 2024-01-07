import type { Meta, StoryObj } from '@storybook/svelte'
import PauseCircleSvelte from '../../../lib/16/solid/pause-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PauseCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PauseCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PauseCircle: Story = {}
