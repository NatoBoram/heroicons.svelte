import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpOnSquare as ArrowUpOnSquareSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowUpOnSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquare: Story = {}
