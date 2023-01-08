import type { Meta, StoryObj } from '@storybook/svelte'
import { Envelope as EnvelopeSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: EnvelopeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EnvelopeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Envelope: Story = {}
