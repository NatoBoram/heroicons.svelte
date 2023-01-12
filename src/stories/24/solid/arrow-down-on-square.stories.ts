import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownOnSquare as ArrowDownOnSquareSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowDownOnSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquare: Story = {}
