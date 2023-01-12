import type { Meta, StoryObj } from '@storybook/svelte'
import { ChartBar as ChartBarSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ChartBarSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChartBarSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChartBar: Story = {}
