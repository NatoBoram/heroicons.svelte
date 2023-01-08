import type { Meta, StoryObj } from '@storybook/svelte'
import { Backward as BackwardSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BackwardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BackwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backward: Story = {}
