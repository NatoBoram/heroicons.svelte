import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsPointingInSvelte from '../../../lib/20/solid/arrows-pointing-in.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowsPointingInSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowsPointingInSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsPointingIn: Story = {}
