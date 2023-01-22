import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowTrendingUpSvelte from '../../../lib/20/solid/arrow-trending-up.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowTrendingUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowTrendingUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingUp: Story = {}
