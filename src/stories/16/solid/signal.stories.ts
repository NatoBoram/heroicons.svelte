import type { Meta, StoryObj } from '@storybook/svelte'
import SignalSvelte from '../../../lib/16/solid/signal.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: SignalSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<SignalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Signal: Story = {}
