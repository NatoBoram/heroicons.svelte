import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallRight as ArrowSmallRightSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: ArrowSmallRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallRight: Story = {}
