import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownOnSquareSvelte from '../../../lib/16/solid/arrow-down-on-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowDownOnSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowDownOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquare: Story = {}
