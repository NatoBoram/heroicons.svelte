import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronLeftSvelte from '../../../lib/24/outline/chevron-left.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronLeft: Story = {}
