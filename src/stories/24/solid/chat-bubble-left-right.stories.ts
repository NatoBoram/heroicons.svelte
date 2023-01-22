import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftRightSvelte from '../../../lib/24/solid/chat-bubble-left-right.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChatBubbleLeftRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleLeftRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftRight: Story = {}
