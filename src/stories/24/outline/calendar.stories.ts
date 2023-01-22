import type { Meta, StoryObj } from '@storybook/svelte'
import CalendarSvelte from '../../../lib/24/outline/calendar.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CalendarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CalendarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calendar: Story = {}
