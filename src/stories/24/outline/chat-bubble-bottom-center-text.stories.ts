import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleBottomCenterText as ChatBubbleBottomCenterTextSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ChatBubbleBottomCenterTextSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleBottomCenterTextSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleBottomCenterText: Story = {}
