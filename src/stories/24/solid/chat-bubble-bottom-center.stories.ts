import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleBottomCenterSvelte from '../../../lib/24/solid/chat-bubble-bottom-center.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChatBubbleBottomCenterSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleBottomCenterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenter: Story = {}
