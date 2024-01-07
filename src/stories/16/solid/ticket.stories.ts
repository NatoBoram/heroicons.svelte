import type { Meta, StoryObj } from '@storybook/svelte'
import TicketSvelte from '../../../lib/16/solid/ticket.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: TicketSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<TicketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Ticket: Story = {}
