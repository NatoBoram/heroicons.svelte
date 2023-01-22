import type { Meta, StoryObj } from '@storybook/svelte'
import InboxStackSvelte from '../../../lib/24/outline/inbox-stack.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: InboxStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InboxStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxStack: Story = {}
