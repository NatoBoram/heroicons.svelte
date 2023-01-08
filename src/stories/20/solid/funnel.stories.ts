import type { Meta, StoryObj } from '@storybook/svelte'
import { Funnel as FunnelSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: FunnelSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<FunnelSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Funnel: Story = {}
