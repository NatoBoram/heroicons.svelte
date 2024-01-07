import type { Meta, StoryObj } from '@storybook/svelte'
import SignalSlashSvelte from '../../../lib/16/solid/signal-slash.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SignalSlashSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SignalSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SignalSlash: Story = {}
