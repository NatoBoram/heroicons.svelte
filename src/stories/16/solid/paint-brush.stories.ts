import type { Meta, StoryObj } from '@storybook/svelte'
import PaintBrushSvelte from '../../../lib/16/solid/paint-brush.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PaintBrushSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PaintBrushSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaintBrush: Story = {}
