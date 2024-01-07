import type { Meta, StoryObj } from '@storybook/svelte'
import CalendarDaysSvelte from '../../../lib/16/solid/calendar-days.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CalendarDaysSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CalendarDaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CalendarDays: Story = {}
