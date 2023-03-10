import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleLeftSvelte from '../../../lib/24/solid/chevron-double-left.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronDoubleLeftSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleLeft: Story = {}
