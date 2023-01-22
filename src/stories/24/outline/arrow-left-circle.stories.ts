import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftCircleSvelte from '../../../lib/24/outline/arrow-left-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLeftCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftCircle: Story = {}
