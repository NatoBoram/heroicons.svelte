import type { Meta, StoryObj } from '@storybook/svelte'
import QueueListSvelte from '../../../lib/24/outline/queue-list.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: QueueListSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<QueueListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QueueList: Story = {}
