import type { Meta, StoryObj } from '@storybook/svelte'
import { AdjustmentsVertical as AdjustmentsVerticalSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: AdjustmentsVerticalSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<AdjustmentsVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AdjustmentsVertical: Story = {}
