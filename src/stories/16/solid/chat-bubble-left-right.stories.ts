import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftRightSvelte from '../../../lib/16/solid/chat-bubble-left-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChatBubbleLeftRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChatBubbleLeftRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftRight: Story = {}
