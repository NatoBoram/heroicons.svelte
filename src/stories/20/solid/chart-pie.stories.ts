import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartPie as ChartPieSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ChartPieSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChartPieSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartPie: Story = {}
