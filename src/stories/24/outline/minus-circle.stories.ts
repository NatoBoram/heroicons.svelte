import type { Meta, StoryObj } from '@storybook/svelte'
import MinusCircleSvelte from '../../../lib/24/outline/minus-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: MinusCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<MinusCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MinusCircle: Story = {}
