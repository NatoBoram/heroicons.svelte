import type { Meta, StoryObj } from '@storybook/svelte'
import { BellSnooze as BellSnoozeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BellSnoozeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BellSnoozeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BellSnooze: Story = {}
