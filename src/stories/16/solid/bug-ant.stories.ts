import type { Meta, StoryObj } from '@storybook/svelte'
import BugAntSvelte from '../../../lib/16/solid/bug-ant.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BugAntSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BugAntSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BugAnt: Story = {}
