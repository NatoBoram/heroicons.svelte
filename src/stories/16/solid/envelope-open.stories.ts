import type { Meta, StoryObj } from '@storybook/svelte'
import EnvelopeOpenSvelte from '../../../lib/16/solid/envelope-open.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EnvelopeOpenSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EnvelopeOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EnvelopeOpen: Story = {}
