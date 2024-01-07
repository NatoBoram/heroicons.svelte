import type { Meta, StoryObj } from '@storybook/svelte'
import ReceiptRefundSvelte from '../../../lib/16/solid/receipt-refund.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ReceiptRefundSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ReceiptRefundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptRefund: Story = {}
