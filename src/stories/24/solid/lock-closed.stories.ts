import type { Meta, StoryObj } from '@storybook/svelte'
import LockClosedSvelte from '../../../lib/24/solid/lock-closed.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: LockClosedSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LockClosedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockClosed: Story = {}
