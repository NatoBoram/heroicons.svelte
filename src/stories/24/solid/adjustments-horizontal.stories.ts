import type { Meta, StoryObj } from '@storybook/svelte'
import AdjustmentsHorizontalSvelte from '../../../lib/24/solid/adjustments-horizontal.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: AdjustmentsHorizontalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AdjustmentsHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsHorizontal: Story = {}
