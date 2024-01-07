import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightEndOnRectangleSvelte from '../../../lib/20/solid/arrow-right-end-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowRightEndOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowRightEndOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightEndOnRectangle: Story = {}
