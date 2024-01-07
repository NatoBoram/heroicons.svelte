import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisVerticalSvelte from '../../../lib/16/solid/ellipsis-vertical.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EllipsisVerticalSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EllipsisVerticalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisVertical: Story = {}
