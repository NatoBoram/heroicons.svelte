import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowSmallUpSvelte from '../../../lib/24/outline/arrow-small-up.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowSmallUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowSmallUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowSmallUp: Story = {}
