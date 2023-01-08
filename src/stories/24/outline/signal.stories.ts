import type { Meta, StoryObj } from '@storybook/svelte'
import { Signal as SignalSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: SignalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<SignalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Signal: Story = {}
