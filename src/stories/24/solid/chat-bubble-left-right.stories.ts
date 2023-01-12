import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleLeftRight as ChatBubbleLeftRightSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ChatBubbleLeftRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleLeftRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftRight: Story = {}
