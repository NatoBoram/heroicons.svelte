import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleDownSvelte from '../../../lib/24/outline/chevron-double-down.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ChevronDoubleDownSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleDown: Story = {}
