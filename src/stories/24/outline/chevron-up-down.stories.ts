import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronUpDownSvelte from '../../../lib/24/outline/chevron-up-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronUpDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUpDown: Story = {}
