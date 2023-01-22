import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftEllipsisSvelte from '../../../lib/24/outline/chat-bubble-left-ellipsis.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChatBubbleLeftEllipsisSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftEllipsis: Story = {}
