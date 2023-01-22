import type { Meta, StoryObj } from '@storybook/svelte'
import ServerStackSvelte from '../../../lib/24/solid/server-stack.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ServerStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ServerStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ServerStack: Story = {}
