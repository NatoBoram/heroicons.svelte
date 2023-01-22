import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsPointingOutSvelte from '../../../lib/20/solid/arrows-pointing-out.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowsPointingOutSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowsPointingOutSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingOut: Story = {}
