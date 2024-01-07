import type { Meta, StoryObj } from '@storybook/svelte'
import ClockSvelte from '../../../lib/16/solid/clock.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ClockSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ClockSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clock: Story = {}
