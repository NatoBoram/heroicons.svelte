import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpOnSquareSvelte from '../../../lib/24/outline/arrow-up-on-square.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUpOnSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpOnSquare: Story = {}
