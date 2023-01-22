import type { Meta, StoryObj } from '@storybook/svelte'
import HandRaisedSvelte from '../../../lib/20/solid/hand-raised.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: HandRaisedSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HandRaisedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandRaised: Story = {}
