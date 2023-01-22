import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsPointingInSvelte from '../../../lib/24/solid/arrows-pointing-in.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowsPointingInSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsPointingInSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingIn: Story = {}
