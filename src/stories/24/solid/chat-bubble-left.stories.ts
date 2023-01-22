import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftSvelte from '../../../lib/24/solid/chat-bubble-left.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChatBubbleLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeft: Story = {}
