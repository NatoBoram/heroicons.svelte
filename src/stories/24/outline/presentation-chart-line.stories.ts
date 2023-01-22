import type { Meta, StoryObj } from '@storybook/svelte'
import PresentationChartLineSvelte from '../../../lib/24/outline/presentation-chart-line.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PresentationChartLineSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PresentationChartLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartLine: Story = {}
