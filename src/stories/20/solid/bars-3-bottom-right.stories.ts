import type { Meta, StoryObj } from '@storybook/svelte'
import { Bars3BottomRight as Bars3BottomRightSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: Bars3BottomRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<Bars3BottomRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bars3BottomRight: Story = {}
