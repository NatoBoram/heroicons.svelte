import type { Meta, StoryObj } from '@storybook/svelte'
import ChartPieSvelte from '../../../lib/24/outline/chart-pie.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChartPieSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartPieSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartPie: Story = {}
