import type { Meta, StoryObj } from '@storybook/svelte'
import { Ticket as TicketSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: TicketSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TicketSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Ticket: Story = {}
