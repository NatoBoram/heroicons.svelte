import type { Meta, StoryObj } from '@storybook/svelte'
import { BugAnt as BugAntSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BugAntSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BugAntSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BugAnt: Story = {}
