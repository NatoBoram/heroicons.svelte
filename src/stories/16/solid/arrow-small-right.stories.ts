import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallRightSvelte from '../../../lib/16/solid/arrow-small-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowSmallRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowSmallRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallRight: Story = {}
