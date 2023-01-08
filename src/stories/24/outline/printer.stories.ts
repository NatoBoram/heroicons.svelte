import type { Meta, StoryObj } from '@storybook/svelte'
import { Printer as PrinterSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: PrinterSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PrinterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Printer: Story = {}
