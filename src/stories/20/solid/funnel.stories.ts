import type { Meta, StoryObj } from '@storybook/svelte'
import FunnelSvelte from '../../../lib/20/solid/funnel.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: FunnelSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FunnelSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Funnel: Story = {}
