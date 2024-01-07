import type { Meta, StoryObj } from '@storybook/svelte'
import ChartPieSvelte from '../../../lib/16/solid/chart-pie.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChartPieSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChartPieSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartPie: Story = {}
