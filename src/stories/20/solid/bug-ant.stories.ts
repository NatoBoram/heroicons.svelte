import type { Meta, StoryObj } from '@storybook/svelte'
import BugAntSvelte from '../../../lib/20/solid/bug-ant.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BugAntSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BugAntSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BugAnt: Story = {}
