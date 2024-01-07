import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightEndOnRectangleSvelte from '../../../lib/24/outline/arrow-right-end-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowRightEndOnRectangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowRightEndOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightEndOnRectangle: Story = {}
