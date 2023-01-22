import type { Meta, StoryObj } from '@storybook/svelte'
import ChartBarSvelte from '../../../lib/24/solid/chart-bar.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBar: Story = {}
