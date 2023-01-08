import type { Meta, StoryObj } from '@storybook/svelte'
import { RectangleGroup as RectangleGroupSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: RectangleGroupSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RectangleGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleGroup: Story = {}
