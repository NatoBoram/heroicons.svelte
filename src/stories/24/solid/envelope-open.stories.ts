import type { Meta, StoryObj } from '@storybook/svelte'
import { EnvelopeOpen as EnvelopeOpenSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: EnvelopeOpenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EnvelopeOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EnvelopeOpen: Story = {}
