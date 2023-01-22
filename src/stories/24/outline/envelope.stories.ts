import type { Meta, StoryObj } from '@storybook/svelte'
import EnvelopeSvelte from '../../../lib/24/outline/envelope.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: EnvelopeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EnvelopeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Envelope: Story = {}
