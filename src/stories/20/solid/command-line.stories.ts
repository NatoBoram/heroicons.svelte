import type { Meta, StoryObj } from '@storybook/svelte'
import { CommandLine as CommandLineSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CommandLineSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CommandLineSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CommandLine: Story = {}
