import type { Meta, StoryObj } from '@storybook/svelte'
import RectangleStackSvelte from '../../../lib/20/solid/rectangle-stack.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: RectangleStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RectangleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RectangleStack: Story = {}
