import type { Meta, StoryObj } from '@storybook/svelte'
import ClockSvelte from '../../../lib/24/outline/clock.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ClockSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClockSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clock: Story = {}
