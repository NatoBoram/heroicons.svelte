import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightOnRectangleSvelte from '../../../lib/16/solid/arrow-right-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowRightOnRectangleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowRightOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightOnRectangle: Story = {}
