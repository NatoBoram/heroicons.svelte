import type { Meta, StoryObj } from '@storybook/svelte'
import BellSnoozeSvelte from '../../../lib/24/outline/bell-snooze.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BellSnoozeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BellSnoozeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSnooze: Story = {}
