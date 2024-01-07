import type { Meta, StoryObj } from '@storybook/svelte'
import Square2StackSvelte from '../../../lib/16/solid/square-2-stack.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Square2StackSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Square2StackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square2Stack: Story = {}
