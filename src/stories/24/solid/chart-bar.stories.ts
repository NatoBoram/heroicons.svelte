import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartBar as ChartBarSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBar: Story = {}
