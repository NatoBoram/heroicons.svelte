import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowPathRoundedSquare as ArrowPathRoundedSquareSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowPathRoundedSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowPathRoundedSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPathRoundedSquare: Story = {}
