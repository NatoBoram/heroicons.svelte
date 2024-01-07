import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleOvalLeftSvelte from '../../../lib/16/solid/chat-bubble-oval-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChatBubbleOvalLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChatBubbleOvalLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeft: Story = {}
