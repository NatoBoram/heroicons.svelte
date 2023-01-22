import type { Meta, StoryObj } from '@storybook/svelte'
import AdjustmentsHorizontalSvelte from '../../../lib/20/solid/adjustments-horizontal.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: AdjustmentsHorizontalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<AdjustmentsHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsHorizontal: Story = {}
