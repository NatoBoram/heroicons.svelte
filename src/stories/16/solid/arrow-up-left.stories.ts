import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpLeftSvelte from '../../../lib/16/solid/arrow-up-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowUpLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowUpLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpLeft: Story = {}
