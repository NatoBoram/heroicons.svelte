import type { Meta, StoryObj } from '@storybook/svelte'
import CheckCircleSvelte from '../../../lib/24/outline/check-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: CheckCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CheckCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CheckCircle: Story = {}
