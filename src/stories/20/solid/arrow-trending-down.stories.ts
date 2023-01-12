import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowTrendingDown as ArrowTrendingDownSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowTrendingDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowTrendingDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingDown: Story = {}
