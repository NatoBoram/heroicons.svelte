import type { Meta, StoryObj } from '@storybook/svelte'
import AdjustmentsVerticalSvelte from '../../../lib/24/outline/adjustments-vertical.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: AdjustmentsVerticalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AdjustmentsVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsVertical: Story = {}
