import type { Meta, StoryObj } from '@storybook/svelte'
import CalendarDaysSvelte from '../../../lib/20/solid/calendar-days.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CalendarDaysSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CalendarDaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CalendarDays: Story = {}
