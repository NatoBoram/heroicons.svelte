import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronUpSvelte from '../../../lib/24/outline/chevron-up.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronUp: Story = {}
