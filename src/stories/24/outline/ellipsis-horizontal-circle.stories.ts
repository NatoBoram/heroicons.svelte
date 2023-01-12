import type { Meta, StoryObj } from '@storybook/svelte'
import { EllipsisHorizontalCircle as EllipsisHorizontalCircleSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: EllipsisHorizontalCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<EllipsisHorizontalCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontalCircle: Story = {}
