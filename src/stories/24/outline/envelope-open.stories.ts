import type { Meta, StoryObj } from '@storybook/svelte'
import EnvelopeOpenSvelte from '../../../lib/24/outline/envelope-open.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: EnvelopeOpenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EnvelopeOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EnvelopeOpen: Story = {}
