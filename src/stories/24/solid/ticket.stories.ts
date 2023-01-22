import type { Meta, StoryObj } from '@storybook/svelte'
import TicketSvelte from '../../../lib/24/solid/ticket.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: TicketSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TicketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Ticket: Story = {}
