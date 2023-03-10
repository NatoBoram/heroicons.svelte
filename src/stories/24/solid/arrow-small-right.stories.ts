import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallRightSvelte from '../../../lib/24/solid/arrow-small-right.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowSmallRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallRight: Story = {}
