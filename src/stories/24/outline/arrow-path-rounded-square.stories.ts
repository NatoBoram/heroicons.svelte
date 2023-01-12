import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowPathRoundedSquare as ArrowPathRoundedSquareSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowPathRoundedSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowPathRoundedSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPathRoundedSquare: Story = {}
