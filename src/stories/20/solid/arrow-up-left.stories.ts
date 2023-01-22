import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowUpLeftSvelte from '../../../lib/20/solid/arrow-up-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowUpLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowUpLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpLeft: Story = {}
