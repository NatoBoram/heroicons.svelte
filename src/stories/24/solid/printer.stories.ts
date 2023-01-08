import type { Meta, StoryObj } from '@storybook/svelte'
import { Printer as PrinterSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PrinterSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PrinterSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Printer: Story = {}
