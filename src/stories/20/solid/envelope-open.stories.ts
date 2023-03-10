import type { Meta, StoryObj } from '@storybook/svelte'
import EnvelopeOpenSvelte from '../../../lib/20/solid/envelope-open.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: EnvelopeOpenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EnvelopeOpenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EnvelopeOpen: Story = {}
