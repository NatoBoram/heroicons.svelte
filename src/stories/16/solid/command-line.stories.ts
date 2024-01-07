import type { Meta, StoryObj } from '@storybook/svelte'
import CommandLineSvelte from '../../../lib/16/solid/command-line.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: CommandLineSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<CommandLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CommandLine: Story = {}
