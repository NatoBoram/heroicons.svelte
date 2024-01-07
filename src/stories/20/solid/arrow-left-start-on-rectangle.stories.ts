import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftStartOnRectangleSvelte from '../../../lib/20/solid/arrow-left-start-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLeftStartOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLeftStartOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftStartOnRectangle: Story = {}
