import type { Meta, StoryObj } from '@storybook/svelte'
import ChartBarSvelte from '../../../lib/20/solid/chart-bar.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChartBarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBar: Story = {}
