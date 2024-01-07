import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowRightStartOnRectangleSvelte from '../../../lib/16/solid/arrow-right-start-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowRightStartOnRectangleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowRightStartOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowRightStartOnRectangle: Story = {}
