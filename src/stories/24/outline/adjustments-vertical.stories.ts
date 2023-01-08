import type { Meta, StoryObj } from '@storybook/svelte'
import { AdjustmentsVertical as AdjustmentsVerticalSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: AdjustmentsVerticalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AdjustmentsVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsVertical: Story = {}
