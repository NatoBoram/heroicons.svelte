import type { Meta, StoryObj } from '@storybook/svelte'
import ChartBarSquareSvelte from '../../../lib/24/outline/chart-bar-square.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChartBarSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartBarSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBarSquare: Story = {}
