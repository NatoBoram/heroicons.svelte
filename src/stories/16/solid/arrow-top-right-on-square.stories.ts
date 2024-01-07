import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowTopRightOnSquareSvelte from '../../../lib/16/solid/arrow-top-right-on-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowTopRightOnSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowTopRightOnSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowTopRightOnSquare: Story = {}
