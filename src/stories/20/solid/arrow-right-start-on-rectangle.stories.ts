import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightStartOnRectangleSvelte from '../../../lib/20/solid/arrow-right-start-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowRightStartOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowRightStartOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightStartOnRectangle: Story = {}
