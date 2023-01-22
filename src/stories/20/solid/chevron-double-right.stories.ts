import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleRightSvelte from '../../../lib/20/solid/chevron-double-right.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronDoubleRightSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDoubleRightSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleRight: Story = {}
