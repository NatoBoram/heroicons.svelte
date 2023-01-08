import type { Meta, StoryObj } from '@storybook/svelte'
import { BellSnooze as BellSnoozeSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: BellSnoozeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSnoozeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSnooze: Story = {}
