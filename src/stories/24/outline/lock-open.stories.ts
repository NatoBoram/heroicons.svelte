import type { Meta, StoryObj } from '@storybook/svelte'
import { LockOpen as LockOpenSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: LockOpenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LockOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockOpen: Story = {}
