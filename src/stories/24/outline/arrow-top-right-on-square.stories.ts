import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowTopRightOnSquareSvelte from '../../../lib/24/outline/arrow-top-right-on-square.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowTopRightOnSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowTopRightOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTopRightOnSquare: Story = {}
