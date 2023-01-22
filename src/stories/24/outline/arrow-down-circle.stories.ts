import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownCircleSvelte from '../../../lib/24/outline/arrow-down-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownCircle: Story = {}
