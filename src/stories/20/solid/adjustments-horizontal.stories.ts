import type { Meta, StoryObj } from '@storybook/svelte'
import { AdjustmentsHorizontal as AdjustmentsHorizontalSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: AdjustmentsHorizontalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<AdjustmentsHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsHorizontal: Story = {}
