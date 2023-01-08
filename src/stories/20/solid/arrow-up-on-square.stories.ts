import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpOnSquare as ArrowUpOnSquareSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowUpOnSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquare: Story = {}
