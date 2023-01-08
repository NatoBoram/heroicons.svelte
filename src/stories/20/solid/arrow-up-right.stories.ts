import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpRight as ArrowUpRightSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpRight: Story = {}
