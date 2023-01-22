import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisHorizontalCircleSvelte from '../../../lib/24/solid/ellipsis-horizontal-circle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: EllipsisHorizontalCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EllipsisHorizontalCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontalCircle: Story = {}
