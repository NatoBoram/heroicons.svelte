import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightOnRectangleSvelte from '../../../lib/20/solid/arrow-right-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowRightOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowRightOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightOnRectangle: Story = {}
