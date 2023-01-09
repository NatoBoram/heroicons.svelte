import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpRight as ArrowUpRightSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUpRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpRight: Story = {}