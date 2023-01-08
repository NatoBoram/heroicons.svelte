import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleOvalLeft as ChatBubbleOvalLeftSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ChatBubbleOvalLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChatBubbleOvalLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeft: Story = {}
