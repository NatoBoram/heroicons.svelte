import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownLeftSvelte from '../../../lib/24/outline/arrow-down-left.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownLeft: Story = {}
