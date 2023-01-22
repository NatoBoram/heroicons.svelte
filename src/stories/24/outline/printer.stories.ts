import type { Meta, StoryObj } from '@storybook/svelte'
import PrinterSvelte from '../../../lib/24/outline/printer.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PrinterSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PrinterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Printer: Story = {}
