import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowTrendingDown as ArrowTrendingDownSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowTrendingDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowTrendingDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingDown: Story = {}
