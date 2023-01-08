import type { Meta, StoryObj } from '@storybook/svelte'
import { AdjustmentsVertical as AdjustmentsVerticalSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: AdjustmentsVerticalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<AdjustmentsVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsVertical: Story = {}
