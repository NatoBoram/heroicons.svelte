import type { Meta, StoryObj } from '@storybook/svelte'
import InboxArrowDownSvelte from '../../../lib/20/solid/inbox-arrow-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: InboxArrowDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<InboxArrowDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InboxArrowDown: Story = {}
