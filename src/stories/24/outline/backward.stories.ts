import type { Meta, StoryObj } from '@storybook/svelte'
import BackwardSvelte from '../../../lib/24/outline/backward.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BackwardSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BackwardSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Backward: Story = {}
