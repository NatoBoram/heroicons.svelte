import type { Meta, StoryObj } from '@storybook/svelte'
import { CalendarDays as CalendarDaysSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: CalendarDaysSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CalendarDaysSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CalendarDays: Story = {}
