import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpLeft as ArrowUpLeftSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ArrowUpLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpLeft: Story = {}
