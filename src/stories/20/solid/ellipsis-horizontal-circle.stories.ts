import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisHorizontalCircleSvelte from '../../../lib/20/solid/ellipsis-horizontal-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: EllipsisHorizontalCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EllipsisHorizontalCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontalCircle: Story = {}
