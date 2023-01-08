import type { Meta, StoryObj } from '@storybook/svelte'
import { EnvelopeOpen as EnvelopeOpenSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: EnvelopeOpenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EnvelopeOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EnvelopeOpen: Story = {}
