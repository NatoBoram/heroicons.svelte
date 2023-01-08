import type { Meta, StoryObj } from '@storybook/svelte'
import { ReceiptRefund as ReceiptRefundSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ReceiptRefundSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ReceiptRefundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptRefund: Story = {}
