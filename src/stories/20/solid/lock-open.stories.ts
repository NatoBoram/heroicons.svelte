import type { Meta, StoryObj } from '@storybook/svelte'
import { LockOpen as LockOpenSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: LockOpenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LockOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockOpen: Story = {}
