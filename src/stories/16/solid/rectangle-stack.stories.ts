import type { Meta, StoryObj } from '@storybook/svelte'
import RectangleStackSvelte from '../../../lib/16/solid/rectangle-stack.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: RectangleStackSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<RectangleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleStack: Story = {}
