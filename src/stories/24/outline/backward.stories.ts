import type { Meta, StoryObj } from '@storybook/svelte'
import { Backward as BackwardSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BackwardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BackwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backward: Story = {}
