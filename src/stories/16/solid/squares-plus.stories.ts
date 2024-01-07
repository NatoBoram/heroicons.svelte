import type { Meta, StoryObj } from '@storybook/svelte'
import SquaresPlusSvelte from '../../../lib/16/solid/squares-plus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SquaresPlusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SquaresPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SquaresPlus: Story = {}
