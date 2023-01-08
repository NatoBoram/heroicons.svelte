import type { Meta, StoryObj } from '@storybook/svelte'
import { Square2Stack as Square2StackSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: Square2StackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Square2StackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square2Stack: Story = {}
