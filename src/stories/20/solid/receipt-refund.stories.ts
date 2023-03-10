import type { Meta, StoryObj } from '@storybook/svelte'
import ReceiptRefundSvelte from '../../../lib/20/solid/receipt-refund.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ReceiptRefundSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ReceiptRefundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptRefund: Story = {}
