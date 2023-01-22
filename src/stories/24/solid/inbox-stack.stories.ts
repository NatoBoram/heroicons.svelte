import type { Meta, StoryObj } from '@storybook/svelte'
import InboxStackSvelte from '../../../lib/24/solid/inbox-stack.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: InboxStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InboxStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxStack: Story = {}
