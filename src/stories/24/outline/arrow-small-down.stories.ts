import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallDownSvelte from '../../../lib/24/outline/arrow-small-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowSmallDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallDown: Story = {}
