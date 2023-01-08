import type { Meta, StoryObj } from '@storybook/svelte'
import { BugAnt as BugAntSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BugAntSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BugAntSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BugAnt: Story = {}
