import type { Meta, StoryObj } from '@storybook/svelte'
import { Ticket as TicketSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: TicketSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TicketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Ticket: Story = {}
