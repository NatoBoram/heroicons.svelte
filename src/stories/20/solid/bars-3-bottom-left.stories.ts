import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars3BottomLeft as Bars3BottomLeftSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: Bars3BottomLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars3BottomLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomLeft: Story = {}
