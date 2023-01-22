import type { Meta, StoryObj } from '@storybook/svelte'
import InboxSvelte from '../../../lib/20/solid/inbox.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: InboxSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<InboxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Inbox: Story = {}
