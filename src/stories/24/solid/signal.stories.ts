import type { Meta, StoryObj } from '@storybook/svelte'
import SignalSvelte from '../../../lib/24/solid/signal.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: SignalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SignalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Signal: Story = {}
