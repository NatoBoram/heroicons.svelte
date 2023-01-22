import type { Meta, StoryObj } from '@storybook/svelte'
import PuzzlePieceSvelte from '../../../lib/24/outline/puzzle-piece.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PuzzlePieceSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PuzzlePieceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PuzzlePiece: Story = {}
