import type { Meta, StoryObj } from '@storybook/svelte'
import ChevronDoubleDownSvelte from '../../../lib/20/solid/chevron-double-down.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ChevronDoubleDownSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ChevronDoubleDownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ChevronDoubleDown: Story = {}
