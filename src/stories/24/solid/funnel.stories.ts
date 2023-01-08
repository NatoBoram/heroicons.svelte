import type { Meta, StoryObj } from '@storybook/svelte'
import { Funnel as FunnelSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: FunnelSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<FunnelSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Funnel: Story = {}
