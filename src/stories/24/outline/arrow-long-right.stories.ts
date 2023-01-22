import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongRightSvelte from '../../../lib/24/outline/arrow-long-right.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLongRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongRight: Story = {}
