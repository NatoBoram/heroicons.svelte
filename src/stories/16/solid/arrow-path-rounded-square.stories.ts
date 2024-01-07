import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowPathRoundedSquareSvelte from '../../../lib/16/solid/arrow-path-rounded-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowPathRoundedSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowPathRoundedSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPathRoundedSquare: Story = {}
