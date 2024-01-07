import type { Meta, StoryObj } from '@storybook/svelte'
import PresentationChartLineSvelte from '../../../lib/16/solid/presentation-chart-line.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PresentationChartLineSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PresentationChartLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartLine: Story = {}
