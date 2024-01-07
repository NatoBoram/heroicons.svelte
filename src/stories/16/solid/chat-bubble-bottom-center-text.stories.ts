import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleBottomCenterTextSvelte from '../../../lib/16/solid/chat-bubble-bottom-center-text.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChatBubbleBottomCenterTextSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChatBubbleBottomCenterTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenterText: Story = {}
