import type { Meta, StoryObj } from '@storybook/svelte'
import SquaresPlusSvelte from '../../../lib/20/solid/squares-plus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: SquaresPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SquaresPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SquaresPlus: Story = {}
