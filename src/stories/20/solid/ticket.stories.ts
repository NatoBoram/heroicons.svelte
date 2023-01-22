import type { Meta, StoryObj } from '@storybook/svelte'
import TicketSvelte from '../../../lib/20/solid/ticket.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: TicketSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TicketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Ticket: Story = {}
