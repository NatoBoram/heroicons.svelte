import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowTopRightOnSquare as ArrowTopRightOnSquareSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowTopRightOnSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowTopRightOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTopRightOnSquare: Story = {}
