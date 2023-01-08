import type { Meta, StoryObj } from '@storybook/svelte'
import { Calendar as CalendarSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CalendarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CalendarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Calendar: Story = {}
