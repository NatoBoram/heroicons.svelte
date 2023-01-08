import type { Meta, StoryObj } from '@storybook/svelte'
import { PuzzlePiece as PuzzlePieceSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: PuzzlePieceSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PuzzlePieceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PuzzlePiece: Story = {}
