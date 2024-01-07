import type { Meta, StoryObj } from '@storybook/svelte'
import ServerStackSvelte from '../../../lib/16/solid/server-stack.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ServerStackSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ServerStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ServerStack: Story = {}
