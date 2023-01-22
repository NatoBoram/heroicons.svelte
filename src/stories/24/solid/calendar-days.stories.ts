import type { Meta, StoryObj } from '@storybook/svelte'
import CalendarDaysSvelte from '../../../lib/24/solid/calendar-days.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CalendarDaysSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CalendarDaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CalendarDays: Story = {}
