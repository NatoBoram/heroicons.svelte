import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownOnSquareStackSvelte from '../../../lib/16/solid/arrow-down-on-square-stack.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowDownOnSquareStackSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowDownOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquareStack: Story = {}
