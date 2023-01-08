import type { Meta, StoryObj } from '@storybook/svelte'
import { Calendar as CalendarSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: CalendarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CalendarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calendar: Story = {}
