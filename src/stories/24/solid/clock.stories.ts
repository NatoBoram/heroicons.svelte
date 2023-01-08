import type { Meta, StoryObj } from '@storybook/svelte'
import { Clock as ClockSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ClockSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClockSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clock: Story = {}
