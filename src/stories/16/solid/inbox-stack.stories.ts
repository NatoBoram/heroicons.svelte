import type { Meta, StoryObj } from '@storybook/svelte'
import InboxStackSvelte from '../../../lib/16/solid/inbox-stack.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: InboxStackSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<InboxStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxStack: Story = {}
