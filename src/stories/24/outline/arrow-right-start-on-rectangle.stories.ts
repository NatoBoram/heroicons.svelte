import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightStartOnRectangleSvelte from '../../../lib/24/outline/arrow-right-start-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowRightStartOnRectangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowRightStartOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightStartOnRectangle: Story = {}
