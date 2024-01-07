import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftEndOnRectangleSvelte from '../../../lib/24/outline/arrow-left-end-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLeftEndOnRectangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftEndOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftEndOnRectangle: Story = {}
