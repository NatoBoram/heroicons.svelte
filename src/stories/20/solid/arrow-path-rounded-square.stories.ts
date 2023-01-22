import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowPathRoundedSquareSvelte from '../../../lib/20/solid/arrow-path-rounded-square.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowPathRoundedSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowPathRoundedSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowPathRoundedSquare: Story = {}
