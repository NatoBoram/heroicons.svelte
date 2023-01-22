import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownOnSquareStackSvelte from '../../../lib/24/outline/arrow-down-on-square-stack.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownOnSquareStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquareStack: Story = {}
