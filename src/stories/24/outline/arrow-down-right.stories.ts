import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowDownRightSvelte from '../../../lib/24/outline/arrow-down-right.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowDownRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowDownRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownRight: Story = {}
