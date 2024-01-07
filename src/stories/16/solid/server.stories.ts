import type { Meta, StoryObj } from '@storybook/svelte'
import ServerSvelte from '../../../lib/16/solid/server.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ServerSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ServerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Server: Story = {}
