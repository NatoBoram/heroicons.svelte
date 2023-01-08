import type { Meta, StoryObj } from '@storybook/svelte'
import { RectangleGroup as RectangleGroupSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: RectangleGroupSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RectangleGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleGroup: Story = {}
