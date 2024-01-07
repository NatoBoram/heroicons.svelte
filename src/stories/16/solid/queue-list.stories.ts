import type { Meta, StoryObj } from '@storybook/svelte'
import QueueListSvelte from '../../../lib/16/solid/queue-list.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: QueueListSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<QueueListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QueueList: Story = {}
