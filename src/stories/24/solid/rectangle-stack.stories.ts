import type { Meta, StoryObj } from '@storybook/svelte'
import RectangleStackSvelte from '../../../lib/24/solid/rectangle-stack.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: RectangleStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RectangleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleStack: Story = {}
