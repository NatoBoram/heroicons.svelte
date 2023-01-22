import type { Meta, StoryObj } from '@storybook/svelte'
import PrinterSvelte from '../../../lib/20/solid/printer.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PrinterSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PrinterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Printer: Story = {}
