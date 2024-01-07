import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightEndOnRectangleSvelte from '../../../lib/16/solid/arrow-right-end-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowRightEndOnRectangleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowRightEndOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightEndOnRectangle: Story = {}
