import type { Meta, StoryObj } from '@storybook/svelte'
import { Inbox as InboxSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: InboxSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<InboxSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Inbox: Story = {}
