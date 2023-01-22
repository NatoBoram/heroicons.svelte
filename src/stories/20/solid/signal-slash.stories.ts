import type { Meta, StoryObj } from '@storybook/svelte'
import SignalSlashSvelte from '../../../lib/20/solid/signal-slash.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: SignalSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SignalSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const SignalSlash: Story = {}
