import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleOvalLeftEllipsisSvelte from '../../../lib/16/solid/chat-bubble-oval-left-ellipsis.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChatBubbleOvalLeftEllipsisSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChatBubbleOvalLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeftEllipsis: Story = {}
