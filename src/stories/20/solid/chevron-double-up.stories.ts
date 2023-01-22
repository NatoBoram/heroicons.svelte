import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleUpSvelte from '../../../lib/20/solid/chevron-double-up.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronDoubleUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDoubleUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleUp: Story = {}
