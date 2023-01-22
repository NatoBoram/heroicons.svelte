import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleUpSvelte from '../../../lib/24/outline/chevron-double-up.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronDoubleUpSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleUp: Story = {}
