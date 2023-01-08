import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownOnSquare as ArrowDownOnSquareSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowDownOnSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquare: Story = {}
