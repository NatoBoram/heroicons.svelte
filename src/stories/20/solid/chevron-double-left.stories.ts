import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleLeftSvelte from '../../../lib/20/solid/chevron-double-left.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronDoubleLeftSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDoubleLeftSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleLeft: Story = {}
