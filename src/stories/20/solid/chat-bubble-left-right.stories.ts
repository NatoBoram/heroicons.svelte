import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleLeftRight as ChatBubbleLeftRightSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ChatBubbleLeftRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleLeftRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeftRight: Story = {}
