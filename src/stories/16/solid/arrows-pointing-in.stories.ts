import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsPointingInSvelte from '../../../lib/16/solid/arrows-pointing-in.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowsPointingInSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowsPointingInSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingIn: Story = {}
