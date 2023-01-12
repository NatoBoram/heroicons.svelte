import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleOvalLeftEllipsis as ChatBubbleOvalLeftEllipsisSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChatBubbleOvalLeftEllipsisSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleOvalLeftEllipsisSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeftEllipsis: Story = {}
