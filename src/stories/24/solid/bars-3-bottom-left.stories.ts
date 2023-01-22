import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3BottomLeftSvelte from '../../../lib/24/solid/bars-3-bottom-left.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: Bars3BottomLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars3BottomLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomLeft: Story = {}
