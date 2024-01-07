import type { Meta, StoryObj } from '@storybook/svelte'
import PresentationChartBarSvelte from '../../../lib/16/solid/presentation-chart-bar.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PresentationChartBarSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PresentationChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartBar: Story = {}
