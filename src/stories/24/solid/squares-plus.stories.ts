import type { Meta, StoryObj } from '@storybook/svelte'
import { SquaresPlus as SquaresPlusSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: SquaresPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SquaresPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SquaresPlus: Story = {}
