import type { Meta, StoryObj } from '@storybook/svelte'
import RectangleGroupSvelte from '../../../lib/24/solid/rectangle-group.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: RectangleGroupSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RectangleGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleGroup: Story = {}
