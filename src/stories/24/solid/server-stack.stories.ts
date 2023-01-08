import type { Meta, StoryObj } from '@storybook/svelte'
import { ServerStack as ServerStackSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ServerStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ServerStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ServerStack: Story = {}
