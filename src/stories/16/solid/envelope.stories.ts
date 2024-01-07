import type { Meta, StoryObj } from '@storybook/svelte'
import EnvelopeSvelte from '../../../lib/16/solid/envelope.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EnvelopeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EnvelopeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Envelope: Story = {}
