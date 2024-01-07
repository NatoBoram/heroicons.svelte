import type { Meta, StoryObj } from '@storybook/svelte'
import AdjustmentsHorizontalSvelte from '../../../lib/16/solid/adjustments-horizontal.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: AdjustmentsHorizontalSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<AdjustmentsHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsHorizontal: Story = {}
