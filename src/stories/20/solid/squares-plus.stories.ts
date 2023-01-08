import type { Meta, StoryObj } from '@storybook/svelte'
import { SquaresPlus as SquaresPlusSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: SquaresPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SquaresPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SquaresPlus: Story = {}
