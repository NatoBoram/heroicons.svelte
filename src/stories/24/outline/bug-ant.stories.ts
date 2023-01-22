import type { Meta, StoryObj } from '@storybook/svelte'
import BugAntSvelte from '../../../lib/24/outline/bug-ant.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BugAntSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BugAntSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BugAnt: Story = {}
