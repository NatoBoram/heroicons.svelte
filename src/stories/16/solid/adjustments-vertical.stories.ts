import type { Meta, StoryObj } from '@storybook/svelte'
import AdjustmentsVerticalSvelte from '../../../lib/16/solid/adjustments-vertical.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: AdjustmentsVerticalSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<AdjustmentsVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsVertical: Story = {}
