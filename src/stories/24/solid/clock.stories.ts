import type { Meta, StoryObj } from '@storybook/svelte'
import { Clock as ClockSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ClockSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClockSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clock: Story = {}
