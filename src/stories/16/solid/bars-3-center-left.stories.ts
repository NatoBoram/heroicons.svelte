import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3CenterLeftSvelte from '../../../lib/16/solid/bars-3-center-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Bars3CenterLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Bars3CenterLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3CenterLeft: Story = {}
