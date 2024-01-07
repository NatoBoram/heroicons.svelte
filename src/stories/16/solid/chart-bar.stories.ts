import type { Meta, StoryObj } from '@storybook/svelte'
import ChartBarSvelte from '../../../lib/16/solid/chart-bar.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChartBarSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBar: Story = {}
