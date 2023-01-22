import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftRightSvelte from '../../../lib/20/solid/chat-bubble-left-right.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChatBubbleLeftRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleLeftRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftRight: Story = {}
