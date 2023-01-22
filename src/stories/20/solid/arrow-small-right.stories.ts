import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallRightSvelte from '../../../lib/20/solid/arrow-small-right.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowSmallRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowSmallRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallRight: Story = {}
