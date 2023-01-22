import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3BottomLeftSvelte from '../../../lib/20/solid/bars-3-bottom-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Bars3BottomLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars3BottomLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomLeft: Story = {}
