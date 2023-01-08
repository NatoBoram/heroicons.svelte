import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartBarSquare as ChartBarSquareSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChartBarSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChartBarSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBarSquare: Story = {}
