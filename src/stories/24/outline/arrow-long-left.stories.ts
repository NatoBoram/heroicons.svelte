import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongLeftSvelte from '../../../lib/24/outline/arrow-long-left.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLongLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongLeft: Story = {}
