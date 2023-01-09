import type { Meta, StoryObj } from '@storybook/svelte'
import { StopCircle as StopCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: StopCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<StopCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const StopCircle: Story = {}