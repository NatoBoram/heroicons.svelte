import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleOvalLeftEllipsisSvelte from '../../../lib/24/outline/chat-bubble-oval-left-ellipsis.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChatBubbleOvalLeftEllipsisSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleOvalLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeftEllipsis: Story = {}
