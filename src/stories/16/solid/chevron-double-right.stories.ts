import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleRightSvelte from '../../../lib/16/solid/chevron-double-right.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronDoubleRightSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronDoubleRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleRight: Story = {}
