import type { Meta, StoryObj } from '@storybook/svelte'
import SquaresPlusSvelte from '../../../lib/24/outline/squares-plus.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: SquaresPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SquaresPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SquaresPlus: Story = {}
