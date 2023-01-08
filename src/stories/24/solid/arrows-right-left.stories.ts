import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowsRightLeft as ArrowsRightLeftSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ArrowsRightLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowsRightLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowsRightLeft: Story = {}
