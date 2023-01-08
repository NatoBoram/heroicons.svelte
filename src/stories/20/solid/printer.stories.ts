import type { Meta, StoryObj } from '@storybook/svelte'
import { Printer as PrinterSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PrinterSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PrinterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Printer: Story = {}
