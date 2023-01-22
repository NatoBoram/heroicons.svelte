import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowLongUpSvelte from '../../../lib/24/outline/arrow-long-up.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowLongUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowLongUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowLongUp: Story = {}
