import type { Meta, StoryObj } from '@storybook/svelte'
import { BellSnooze as BellSnoozeSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BellSnoozeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSnoozeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSnooze: Story = {}
