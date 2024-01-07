import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsRightLeftSvelte from '../../../lib/16/solid/arrows-right-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ArrowsRightLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ArrowsRightLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsRightLeft: Story = {}
