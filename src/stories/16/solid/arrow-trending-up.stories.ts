import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowTrendingUpSvelte from '../../../lib/16/solid/arrow-trending-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowTrendingUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowTrendingUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingUp: Story = {}
