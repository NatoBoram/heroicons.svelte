import type { Meta, StoryObj } from '@storybook/svelte'
import Square2StackSvelte from '../../../lib/24/outline/square-2-stack.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: Square2StackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Square2StackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square2Stack: Story = {}
