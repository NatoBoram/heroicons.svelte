import type { Meta, StoryObj } from '@storybook/svelte'
import Square2StackSvelte from '../../../lib/20/solid/square-2-stack.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Square2StackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Square2StackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square2Stack: Story = {}
