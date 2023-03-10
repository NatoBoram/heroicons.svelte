import type { Meta, StoryObj } from '@storybook/svelte'
import SignalSvelte from '../../../lib/20/solid/signal.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: SignalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SignalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Signal: Story = {}
