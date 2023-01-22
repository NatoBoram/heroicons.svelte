import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpOnSquareStackSvelte from '../../../lib/24/outline/arrow-up-on-square-stack.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUpOnSquareStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquareStack: Story = {}
