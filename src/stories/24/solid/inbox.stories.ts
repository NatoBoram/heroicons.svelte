import type { Meta, StoryObj } from '@storybook/svelte'
import { Inbox as InboxSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: InboxSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InboxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Inbox: Story = {}