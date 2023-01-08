import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowSmallUp as ArrowSmallUpSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowSmallUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallUp: Story = {}
