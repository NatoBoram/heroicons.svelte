import type { Meta, StoryObj } from '@storybook/svelte'
import QueueListSvelte from '../../../lib/20/solid/queue-list.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: QueueListSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<QueueListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QueueList: Story = {}
