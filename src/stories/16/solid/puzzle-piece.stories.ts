import type { Meta, StoryObj } from '@storybook/svelte'
import PuzzlePieceSvelte from '../../../lib/16/solid/puzzle-piece.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PuzzlePieceSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PuzzlePieceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PuzzlePiece: Story = {}
