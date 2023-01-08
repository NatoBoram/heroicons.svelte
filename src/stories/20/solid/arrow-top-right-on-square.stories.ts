import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowTopRightOnSquare as ArrowTopRightOnSquareSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowTopRightOnSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowTopRightOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTopRightOnSquare: Story = {}
