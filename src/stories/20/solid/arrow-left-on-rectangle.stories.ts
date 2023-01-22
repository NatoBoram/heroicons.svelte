import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftOnRectangleSvelte from '../../../lib/20/solid/arrow-left-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLeftOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLeftOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftOnRectangle: Story = {}
