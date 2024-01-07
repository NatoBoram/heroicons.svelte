import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftStartOnRectangleSvelte from '../../../lib/16/solid/arrow-left-start-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLeftStartOnRectangleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLeftStartOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftStartOnRectangle: Story = {}
