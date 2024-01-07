import type { Meta, StoryObj } from '@storybook/svelte'
import LockClosedSvelte from '../../../lib/16/solid/lock-closed.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: LockClosedSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<LockClosedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockClosed: Story = {}
