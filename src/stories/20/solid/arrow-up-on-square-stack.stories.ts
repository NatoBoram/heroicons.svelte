import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpOnSquareStack as ArrowUpOnSquareStackSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowUpOnSquareStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquareStack: Story = {}
