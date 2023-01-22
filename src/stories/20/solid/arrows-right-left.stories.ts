import type { Meta, StoryObj } from '@storybook/svelte'
import ArrowsRightLeftSvelte from '../../../lib/20/solid/arrows-right-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ArrowsRightLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ArrowsRightLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsRightLeft: Story = {}
