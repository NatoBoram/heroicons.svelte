import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleOvalLeftEllipsis as ChatBubbleOvalLeftEllipsisSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ChatBubbleOvalLeftEllipsisSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleOvalLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeftEllipsis: Story = {}
