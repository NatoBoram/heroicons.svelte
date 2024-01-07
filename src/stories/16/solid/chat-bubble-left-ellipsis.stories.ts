import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftEllipsisSvelte from '../../../lib/16/solid/chat-bubble-left-ellipsis.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChatBubbleLeftEllipsisSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChatBubbleLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftEllipsis: Story = {}
