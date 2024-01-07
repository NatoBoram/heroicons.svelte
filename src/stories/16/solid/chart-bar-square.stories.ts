import type { Meta, StoryObj } from '@storybook/svelte'
import ChartBarSquareSvelte from '../../../lib/16/solid/chart-bar-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChartBarSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChartBarSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBarSquare: Story = {}
