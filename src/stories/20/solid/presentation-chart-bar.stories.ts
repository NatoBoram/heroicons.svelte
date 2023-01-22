import type { Meta, StoryObj } from '@storybook/svelte'
import PresentationChartBarSvelte from '../../../lib/20/solid/presentation-chart-bar.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PresentationChartBarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PresentationChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PresentationChartBar: Story = {}
