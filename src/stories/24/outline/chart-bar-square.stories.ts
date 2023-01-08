import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartBarSquare as ChartBarSquareSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ChartBarSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartBarSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBarSquare: Story = {}
