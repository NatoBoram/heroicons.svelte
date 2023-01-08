import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartBar as ChartBarSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBar: Story = {}
