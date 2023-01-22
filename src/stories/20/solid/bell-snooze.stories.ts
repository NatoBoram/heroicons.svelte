import type { Meta, StoryObj } from '@storybook/svelte'
import BellSnoozeSvelte from '../../../lib/20/solid/bell-snooze.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BellSnoozeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellSnoozeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSnooze: Story = {}
