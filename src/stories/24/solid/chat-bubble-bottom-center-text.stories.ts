import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleBottomCenterTextSvelte from '../../../lib/24/solid/chat-bubble-bottom-center-text.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChatBubbleBottomCenterTextSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleBottomCenterTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenterText: Story = {}
