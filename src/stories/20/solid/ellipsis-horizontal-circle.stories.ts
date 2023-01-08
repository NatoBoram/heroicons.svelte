import type { Meta, StoryObj } from '@storybook/svelte'
import { EllipsisHorizontalCircle as EllipsisHorizontalCircleSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: EllipsisHorizontalCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EllipsisHorizontalCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EllipsisHorizontalCircle: Story = {}
