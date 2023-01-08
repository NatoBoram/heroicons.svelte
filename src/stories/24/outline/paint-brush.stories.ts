import type { Meta, StoryObj } from '@storybook/svelte'
import { PaintBrush as PaintBrushSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: PaintBrushSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PaintBrushSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaintBrush: Story = {}
