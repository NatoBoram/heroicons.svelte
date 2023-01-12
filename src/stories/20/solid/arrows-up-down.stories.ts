import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsUpDown as ArrowsUpDownSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowsUpDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowsUpDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsUpDown: Story = {}
