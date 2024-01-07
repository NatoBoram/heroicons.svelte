import type { Meta, StoryObj } from '@storybook/svelte'
import BellSnoozeSvelte from '../../../lib/16/solid/bell-snooze.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BellSnoozeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BellSnoozeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSnooze: Story = {}
