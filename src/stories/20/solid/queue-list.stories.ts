import type { Meta, StoryObj } from '@storybook/svelte'
import { QueueList as QueueListSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: QueueListSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<QueueListSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QueueList: Story = {}
