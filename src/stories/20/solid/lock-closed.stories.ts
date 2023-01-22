import type { Meta, StoryObj } from '@storybook/svelte'
import LockClosedSvelte from '../../../lib/20/solid/lock-closed.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: LockClosedSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LockClosedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockClosed: Story = {}
