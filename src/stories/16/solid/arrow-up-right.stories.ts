import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpRightSvelte from '../../../lib/16/solid/arrow-up-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUpRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpRight: Story = {}
