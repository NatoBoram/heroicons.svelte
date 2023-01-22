import type { Meta, StoryObj } from '@storybook/svelte'
import PaintBrushSvelte from '../../../lib/24/solid/paint-brush.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PaintBrushSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PaintBrushSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaintBrush: Story = {}
