import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronRightSvelte from '../../../lib/24/outline/chevron-right.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronRight: Story = {}
