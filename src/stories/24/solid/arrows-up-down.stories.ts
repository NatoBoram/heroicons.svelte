import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsUpDown as ArrowsUpDownSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowsUpDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsUpDown: Story = {}
