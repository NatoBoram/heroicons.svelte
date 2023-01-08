import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsUpDown as ArrowsUpDownSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowsUpDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowsUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsUpDown: Story = {}
