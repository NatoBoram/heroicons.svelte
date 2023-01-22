import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownOnSquareSvelte from '../../../lib/24/outline/arrow-down-on-square.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownOnSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquare: Story = {}
