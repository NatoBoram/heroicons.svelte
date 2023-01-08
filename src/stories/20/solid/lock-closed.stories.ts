import type { Meta, StoryObj } from '@storybook/svelte'
import { LockClosed as LockClosedSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: LockClosedSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<LockClosedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockClosed: Story = {}
