import type { Meta, StoryObj } from '@storybook/svelte'
import PauseCircleSvelte from '../../../lib/20/solid/pause-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PauseCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PauseCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PauseCircle: Story = {}
