import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpLeft as ArrowUpLeftSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ArrowUpLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpLeft: Story = {}
