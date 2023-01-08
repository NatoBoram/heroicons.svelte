import type { Meta, StoryObj } from '@storybook/svelte'
import { LockClosed as LockClosedSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: LockClosedSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LockClosedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const LockClosed: Story = {}
