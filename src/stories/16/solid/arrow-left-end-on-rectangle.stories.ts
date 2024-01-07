import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftEndOnRectangleSvelte from '../../../lib/16/solid/arrow-left-end-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowLeftEndOnRectangleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowLeftEndOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftEndOnRectangle: Story = {}
