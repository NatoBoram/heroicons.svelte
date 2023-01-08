import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowTrendingUp as ArrowTrendingUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowTrendingUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowTrendingUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTrendingUp: Story = {}
