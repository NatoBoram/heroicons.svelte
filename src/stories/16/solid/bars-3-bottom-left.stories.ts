import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3BottomLeftSvelte from '../../../lib/16/solid/bars-3-bottom-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Bars3BottomLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Bars3BottomLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomLeft: Story = {}
