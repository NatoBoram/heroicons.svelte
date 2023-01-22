import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisVerticalSvelte from '../../../lib/24/outline/ellipsis-vertical.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: EllipsisVerticalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EllipsisVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisVertical: Story = {}
