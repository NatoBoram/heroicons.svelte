import type { Meta, StoryObj } from '@storybook/svelte'
import { HandRaised as HandRaisedSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: HandRaisedSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HandRaisedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandRaised: Story = {}