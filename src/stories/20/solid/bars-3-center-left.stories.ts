import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3CenterLeftSvelte from '../../../lib/20/solid/bars-3-center-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: Bars3CenterLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars3CenterLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3CenterLeft: Story = {}
