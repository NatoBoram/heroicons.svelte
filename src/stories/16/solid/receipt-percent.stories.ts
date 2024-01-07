import type { Meta, StoryObj } from '@storybook/svelte'
import ReceiptPercentSvelte from '../../../lib/16/solid/receipt-percent.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ReceiptPercentSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ReceiptPercentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptPercent: Story = {}
