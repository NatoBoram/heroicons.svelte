import type { Meta, StoryObj } from '@storybook/svelte'
import CommandLineSvelte from '../../../lib/24/outline/command-line.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CommandLineSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CommandLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CommandLine: Story = {}
