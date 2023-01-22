import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpRightSvelte from '../../../lib/20/solid/arrow-up-right.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpRight: Story = {}
