import type { Meta, StoryObj } from '@storybook/svelte'
import TableCellsSvelte from '../../../lib/24/outline/table-cells.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: TableCellsSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TableCellsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const TableCells: Story = {}
