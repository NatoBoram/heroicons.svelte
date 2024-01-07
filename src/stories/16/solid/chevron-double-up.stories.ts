import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleUpSvelte from '../../../lib/16/solid/chevron-double-up.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ChevronDoubleUpSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ChevronDoubleUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleUp: Story = {}
