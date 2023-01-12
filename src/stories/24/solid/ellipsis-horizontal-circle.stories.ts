import type { Meta, StoryObj } from '@storybook/svelte'
import { EllipsisHorizontalCircle as EllipsisHorizontalCircleSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: EllipsisHorizontalCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EllipsisHorizontalCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontalCircle: Story = {}
