import type { Meta, StoryObj } from '@storybook/svelte'
import FunnelSvelte from '../../../lib/24/solid/funnel.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: FunnelSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FunnelSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Funnel: Story = {}
