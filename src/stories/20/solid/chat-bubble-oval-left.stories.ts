import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleOvalLeft as ChatBubbleOvalLeftSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChatBubbleOvalLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleOvalLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleOvalLeft: Story = {}
