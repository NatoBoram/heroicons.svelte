import type { Meta, StoryObj } from '@storybook/svelte'
import CircleStackSvelte from '../../../lib/24/outline/circle-stack.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CircleStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CircleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CircleStack: Story = {}
