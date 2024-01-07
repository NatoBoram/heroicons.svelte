import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleDownSvelte from '../../../lib/16/solid/chevron-double-down.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronDoubleDownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronDoubleDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleDown: Story = {}
