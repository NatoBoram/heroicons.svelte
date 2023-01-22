import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleOvalLeftSvelte from '../../../lib/24/outline/chat-bubble-oval-left.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChatBubbleOvalLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleOvalLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeft: Story = {}
