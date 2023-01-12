import type { Meta, StoryObj } from '@storybook/svelte'
import { Server as ServerSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ServerSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ServerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Server: Story = {}
