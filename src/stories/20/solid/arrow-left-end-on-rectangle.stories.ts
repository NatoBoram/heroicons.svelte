import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLeftEndOnRectangleSvelte from '../../../lib/20/solid/arrow-left-end-on-rectangle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowLeftEndOnRectangleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowLeftEndOnRectangleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLeftEndOnRectangle: Story = {}
