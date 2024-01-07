import type { Meta, StoryObj } from '@storybook/svelte'
import LockOpenSvelte from '../../../lib/16/solid/lock-open.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: LockOpenSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<LockOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockOpen: Story = {}
