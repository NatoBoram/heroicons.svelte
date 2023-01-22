import type { Meta, StoryObj } from '@storybook/svelte'
import SignalSlashSvelte from '../../../lib/24/outline/signal-slash.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: SignalSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SignalSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SignalSlash: Story = {}
