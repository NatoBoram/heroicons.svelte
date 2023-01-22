import type { Meta, StoryObj } from '@storybook/svelte'
import CircleStackSvelte from '../../../lib/24/solid/circle-stack.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: CircleStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CircleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CircleStack: Story = {}
