import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowTrendingDownSvelte from '../../../lib/16/solid/arrow-trending-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowTrendingDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowTrendingDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingDown: Story = {}
