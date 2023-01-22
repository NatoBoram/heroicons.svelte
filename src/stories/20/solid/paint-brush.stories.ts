import type { Meta, StoryObj } from '@storybook/svelte'
import PaintBrushSvelte from '../../../lib/20/solid/paint-brush.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PaintBrushSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PaintBrushSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaintBrush: Story = {}
