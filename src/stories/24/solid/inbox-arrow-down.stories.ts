import type { Meta, StoryObj } from '@storybook/svelte'
import InboxArrowDownSvelte from '../../../lib/24/solid/inbox-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: InboxArrowDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InboxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxArrowDown: Story = {}
