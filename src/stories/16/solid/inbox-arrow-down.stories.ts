import type { Meta, StoryObj } from '@storybook/svelte'
import InboxArrowDownSvelte from '../../../lib/16/solid/inbox-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: InboxArrowDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<InboxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxArrowDown: Story = {}
