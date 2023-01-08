import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallRight as ArrowSmallRightSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowSmallRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowSmallRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallRight: Story = {}
