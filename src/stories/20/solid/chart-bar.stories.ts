import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartBar as ChartBarSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ChartBarSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBar: Story = {}
