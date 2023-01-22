import type { Meta, StoryObj } from '@storybook/svelte'
import LockOpenSvelte from '../../../lib/20/solid/lock-open.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: LockOpenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LockOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockOpen: Story = {}
