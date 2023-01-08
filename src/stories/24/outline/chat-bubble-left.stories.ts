import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleLeft as ChatBubbleLeftSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ChatBubbleLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeft: Story = {}
