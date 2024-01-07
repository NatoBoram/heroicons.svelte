import type { Meta, StoryObj } from '@storybook/svelte'
import HandRaisedSvelte from '../../../lib/16/solid/hand-raised.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: HandRaisedSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<HandRaisedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandRaised: Story = {}
