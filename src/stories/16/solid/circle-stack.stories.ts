import type { Meta, StoryObj } from '@storybook/svelte'
import CircleStackSvelte from '../../../lib/16/solid/circle-stack.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CircleStackSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CircleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CircleStack: Story = {}
