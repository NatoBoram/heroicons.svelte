import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleBottomCenterTextSvelte from '../../../lib/20/solid/chat-bubble-bottom-center-text.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChatBubbleBottomCenterTextSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleBottomCenterTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenterText: Story = {}
