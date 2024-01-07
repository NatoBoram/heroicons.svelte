import type { Meta, StoryObj } from '@storybook/svelte'
import TableCellsSvelte from '../../../lib/16/solid/table-cells.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: TableCellsSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<TableCellsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const TableCells: Story = {}
