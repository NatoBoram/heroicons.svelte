import type { Meta, StoryObj } from '@storybook/svelte'
import ServerSvelte from '../../../lib/24/outline/server.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ServerSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ServerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Server: Story = {}
