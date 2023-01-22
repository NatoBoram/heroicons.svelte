import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsPointingOutSvelte from '../../../lib/24/outline/arrows-pointing-out.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowsPointingOutSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsPointingOutSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingOut: Story = {}
