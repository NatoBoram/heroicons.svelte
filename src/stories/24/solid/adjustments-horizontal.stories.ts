import type { Meta, StoryObj } from '@storybook/svelte'
import { AdjustmentsHorizontal as AdjustmentsHorizontalSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: AdjustmentsHorizontalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AdjustmentsHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsHorizontal: Story = {}
