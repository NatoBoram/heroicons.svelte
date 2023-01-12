import type { Meta, StoryObj } from '@storybook/svelte'
import { ArrowUpLeft as ArrowUpLeftSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ArrowUpLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ArrowUpLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowUpLeft: Story = {}
