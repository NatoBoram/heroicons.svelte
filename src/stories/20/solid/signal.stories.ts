import type { Meta, StoryObj } from '@storybook/svelte'
import { Signal as SignalSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: SignalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SignalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Signal: Story = {}
