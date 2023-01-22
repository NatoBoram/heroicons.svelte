import type { Meta, StoryObj } from '@storybook/svelte'
import HandRaisedSvelte from '../../../lib/24/solid/hand-raised.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: HandRaisedSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandRaisedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandRaised: Story = {}
