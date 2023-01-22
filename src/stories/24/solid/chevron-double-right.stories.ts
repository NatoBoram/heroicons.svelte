import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleRightSvelte from '../../../lib/24/solid/chevron-double-right.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ChevronDoubleRightSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ChevronDoubleRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleRight: Story = {}
