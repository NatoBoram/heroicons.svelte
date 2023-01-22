import type { Meta, StoryObj } from '@storybook/svelte'
import EllipsisHorizontalSvelte from '../../../lib/24/outline/ellipsis-horizontal.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: EllipsisHorizontalSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EllipsisHorizontalSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontal: Story = {}
