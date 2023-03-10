import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownOnSquareStackSvelte from '../../../lib/20/solid/arrow-down-on-square-stack.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownOnSquareStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquareStack: Story = {}
