import type { Meta, StoryObj } from '@storybook/svelte'
import { Envelope as EnvelopeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: EnvelopeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EnvelopeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Envelope: Story = {}
