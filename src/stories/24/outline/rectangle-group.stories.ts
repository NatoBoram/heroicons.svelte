import type { Meta, StoryObj } from '@storybook/svelte'
import { RectangleGroup as RectangleGroupSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: RectangleGroupSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RectangleGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleGroup: Story = {}
