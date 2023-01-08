import type { Meta, StoryObj } from '@storybook/svelte'
import { QueueList as QueueListSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: QueueListSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<QueueListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QueueList: Story = {}
