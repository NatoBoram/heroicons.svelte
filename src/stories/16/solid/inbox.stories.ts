import type { Meta, StoryObj } from '@storybook/svelte'
import InboxSvelte from '../../../lib/16/solid/inbox.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: InboxSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<InboxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Inbox: Story = {}
