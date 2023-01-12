import type { Meta, StoryObj } from '@storybook/svelte'
import { ServerStack as ServerStackSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ServerStackSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ServerStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ServerStack: Story = {}
