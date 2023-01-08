import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpOnSquareStack as ArrowUpOnSquareStackSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowUpOnSquareStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpOnSquareStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquareStack: Story = {}
