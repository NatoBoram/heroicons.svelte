import type { Meta, StoryObj } from '@storybook/svelte'
import { Envelope as EnvelopeSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: EnvelopeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EnvelopeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Envelope: Story = {}
