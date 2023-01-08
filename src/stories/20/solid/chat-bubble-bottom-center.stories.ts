import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleBottomCenter as ChatBubbleBottomCenterSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ChatBubbleBottomCenterSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleBottomCenterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenter: Story = {}
