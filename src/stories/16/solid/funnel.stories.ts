import type { Meta, StoryObj } from '@storybook/svelte'
import FunnelSvelte from '../../../lib/16/solid/funnel.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FunnelSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FunnelSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Funnel: Story = {}
