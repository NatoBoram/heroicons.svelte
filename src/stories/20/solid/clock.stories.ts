import type { Meta, StoryObj } from '@storybook/svelte'
import { Clock as ClockSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ClockSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ClockSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Clock: Story = {}
