import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleBottomCenter as ChatBubbleBottomCenterSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ChatBubbleBottomCenterSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleBottomCenterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenter: Story = {}
