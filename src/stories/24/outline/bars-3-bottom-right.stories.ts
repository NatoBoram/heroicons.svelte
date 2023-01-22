import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3BottomRightSvelte from '../../../lib/24/outline/bars-3-bottom-right.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: Bars3BottomRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<Bars3BottomRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomRight: Story = {}
