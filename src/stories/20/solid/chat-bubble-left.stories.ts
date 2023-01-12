import type { Meta, StoryObj } from '@storybook/svelte'
import { ChatBubbleLeft as ChatBubbleLeftSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChatBubbleLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChatBubbleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChatBubbleLeft: Story = {}
