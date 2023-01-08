import type { Meta, StoryObj } from '@storybook/svelte'
import { TableCells as TableCellsSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: TableCellsSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<TableCellsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const TableCells: Story = {}
