import type { Meta, StoryObj } from '@storybook/svelte'
import { ServerStack as ServerStackSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ServerStackSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ServerStackSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ServerStack: Story = {}
