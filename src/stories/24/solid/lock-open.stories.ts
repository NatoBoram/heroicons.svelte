import type { Meta, StoryObj } from '@storybook/svelte'
import LockOpenSvelte from '../../../lib/24/solid/lock-open.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: LockOpenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LockOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockOpen: Story = {}
