import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowTrendingUpSvelte from '../../../lib/24/outline/arrow-trending-up.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowTrendingUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowTrendingUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingUp: Story = {}
