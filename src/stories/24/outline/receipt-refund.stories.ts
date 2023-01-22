import type { Meta, StoryObj } from '@storybook/svelte'
import ReceiptRefundSvelte from '../../../lib/24/outline/receipt-refund.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ReceiptRefundSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ReceiptRefundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptRefund: Story = {}
