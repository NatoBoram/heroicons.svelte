import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowDownOnSquare as ArrowDownOnSquareSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowDownOnSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowDownOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownOnSquare: Story = {}
