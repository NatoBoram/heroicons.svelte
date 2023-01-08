import type { Meta, StoryObj } from '@storybook/svelte'
import { HandRaised as HandRaisedSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: HandRaisedSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HandRaisedSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandRaised: Story = {}
