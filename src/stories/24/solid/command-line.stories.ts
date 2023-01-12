import type { Meta, StoryObj } from '@storybook/svelte'
import { CommandLine as CommandLineSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CommandLineSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CommandLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CommandLine: Story = {}
