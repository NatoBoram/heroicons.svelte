import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftOnRectangleSvelte from '../../../lib/24/solid/arrow-left-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLeftOnRectangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftOnRectangle: Story = {}
