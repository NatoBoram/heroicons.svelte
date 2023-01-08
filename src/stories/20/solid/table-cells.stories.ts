import type { Meta, StoryObj } from '@storybook/svelte'
import { TableCells as TableCellsSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: TableCellsSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TableCellsSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const TableCells: Story = {}
