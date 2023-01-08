import type { Meta, StoryObj } from '@storybook/svelte'
import { PuzzlePiece as PuzzlePieceSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PuzzlePieceSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PuzzlePieceSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PuzzlePiece: Story = {}
