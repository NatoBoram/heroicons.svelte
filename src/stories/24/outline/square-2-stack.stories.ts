import type { Meta, StoryObj } from '@storybook/svelte'
import { Square2Stack as Square2StackSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: Square2StackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Square2StackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Square2Stack: Story = {}
