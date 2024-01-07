import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpOnSquareStackSvelte from '../../../lib/16/solid/arrow-up-on-square-stack.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUpOnSquareStackSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUpOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquareStack: Story = {}
