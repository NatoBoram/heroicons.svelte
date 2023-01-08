import type { Meta, StoryObj } from '@storybook/svelte'
import { Clock as ClockSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ClockSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ClockSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clock: Story = {}
