import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowTrendingDownSvelte from '../../../lib/24/solid/arrow-trending-down.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowTrendingDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowTrendingDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingDown: Story = {}
