import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleBottomCenterSvelte from '../../../lib/16/solid/chat-bubble-bottom-center.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChatBubbleBottomCenterSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChatBubbleBottomCenterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenter: Story = {}
