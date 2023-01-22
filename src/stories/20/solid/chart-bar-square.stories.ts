import type { Meta, StoryObj } from '@storybook/svelte'
import ChartBarSquareSvelte from '../../../lib/20/solid/chart-bar-square.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChartBarSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChartBarSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBarSquare: Story = {}
