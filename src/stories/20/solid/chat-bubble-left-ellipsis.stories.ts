import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleLeftEllipsisSvelte from '../../../lib/20/solid/chat-bubble-left-ellipsis.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChatBubbleLeftEllipsisSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftEllipsis: Story = {}
