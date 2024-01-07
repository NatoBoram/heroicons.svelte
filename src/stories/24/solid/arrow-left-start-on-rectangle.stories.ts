import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftStartOnRectangleSvelte from '../../../lib/24/solid/arrow-left-start-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowLeftStartOnRectangleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLeftStartOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftStartOnRectangle: Story = {}
