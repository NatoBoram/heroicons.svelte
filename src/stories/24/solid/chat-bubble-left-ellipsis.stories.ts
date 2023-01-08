import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleLeftEllipsis as ChatBubbleLeftEllipsisSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ChatBubbleLeftEllipsisSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftEllipsis: Story = {}
