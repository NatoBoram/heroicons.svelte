import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisHorizontalCircleSvelte from '../../../lib/16/solid/ellipsis-horizontal-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: EllipsisHorizontalCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<EllipsisHorizontalCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontalCircle: Story = {}
