import type { Meta, StoryObj } from '@storybook/svelte'
import EnvelopeSvelte from '../../../lib/20/solid/envelope.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: EnvelopeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EnvelopeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Envelope: Story = {}
