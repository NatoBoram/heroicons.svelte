import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftSvelte from '../../../lib/16/solid/chat-bubble-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChatBubbleLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChatBubbleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeft: Story = {}
