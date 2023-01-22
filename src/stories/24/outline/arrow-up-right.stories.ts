import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpRightSvelte from '../../../lib/24/outline/arrow-up-right.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUpRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpRight: Story = {}
