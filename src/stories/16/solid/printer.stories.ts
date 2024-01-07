import type { Meta, StoryObj } from '@storybook/svelte'
import PrinterSvelte from '../../../lib/16/solid/printer.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PrinterSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PrinterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Printer: Story = {}
