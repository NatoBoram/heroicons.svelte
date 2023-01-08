import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars3BottomLeft as Bars3BottomLeftSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: Bars3BottomLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars3BottomLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomLeft: Story = {}
