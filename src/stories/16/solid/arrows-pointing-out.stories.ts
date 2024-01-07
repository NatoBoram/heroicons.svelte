import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsPointingOutSvelte from '../../../lib/16/solid/arrows-pointing-out.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowsPointingOutSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowsPointingOutSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingOut: Story = {}
