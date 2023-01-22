import type { Meta, StoryObj } from '@storybook/svelte'
import PresentationChartBarSvelte from '../../../lib/24/solid/presentation-chart-bar.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PresentationChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PresentationChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartBar: Story = {}
