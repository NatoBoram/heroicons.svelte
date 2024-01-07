import type { Meta, StoryObj } from '@storybook/svelte'
import Bars3BottomRightSvelte from '../../../lib/16/solid/bars-3-bottom-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: Bars3BottomRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<Bars3BottomRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomRight: Story = {}
