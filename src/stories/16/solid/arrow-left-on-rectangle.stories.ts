import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftOnRectangleSvelte from '../../../lib/16/solid/arrow-left-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLeftOnRectangleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLeftOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftOnRectangle: Story = {}
