import type { Meta, StoryObj } from '@storybook/svelte'
import { Server as ServerSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ServerSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ServerSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Server: Story = {}
