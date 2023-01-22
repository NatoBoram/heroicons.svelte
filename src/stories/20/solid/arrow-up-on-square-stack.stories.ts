import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpOnSquareStackSvelte from '../../../lib/20/solid/arrow-up-on-square-stack.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpOnSquareStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquareStack: Story = {}
