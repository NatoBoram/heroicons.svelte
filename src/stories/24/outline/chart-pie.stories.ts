import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartPie as ChartPieSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ChartPieSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartPieSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartPie: Story = {}
