import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleLeftSvelte from '../../../lib/16/solid/chevron-double-left.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronDoubleLeftSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronDoubleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleLeft: Story = {}
