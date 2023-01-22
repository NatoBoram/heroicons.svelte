import type { Meta, StoryObj } from '@storybook/svelte'
import ChatBubbleBottomCenterSvelte from '../../../lib/20/solid/chat-bubble-bottom-center.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChatBubbleBottomCenterSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleBottomCenterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenter: Story = {}
