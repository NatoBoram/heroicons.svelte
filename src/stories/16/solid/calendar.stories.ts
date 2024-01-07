import type { Meta, StoryObj } from '@storybook/svelte'
import CalendarSvelte from '../../../lib/16/solid/calendar.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CalendarSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CalendarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calendar: Story = {}
