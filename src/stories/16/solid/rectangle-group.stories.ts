import type { Meta, StoryObj } from '@storybook/svelte'
import RectangleGroupSvelte from '../../../lib/16/solid/rectangle-group.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: RectangleGroupSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<RectangleGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleGroup: Story = {}
