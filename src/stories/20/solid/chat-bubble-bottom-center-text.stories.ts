import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleBottomCenterText as ChatBubbleBottomCenterTextSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ChatBubbleBottomCenterTextSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleBottomCenterTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenterText: Story = {}
