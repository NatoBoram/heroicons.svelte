import type { Meta, StoryObj } from '@storybook/svelte'
import CircleStackSvelte from '../../../lib/20/solid/circle-stack.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: CircleStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CircleStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CircleStack: Story = {}
