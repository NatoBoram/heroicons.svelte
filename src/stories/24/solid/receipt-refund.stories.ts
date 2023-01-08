import type { Meta, StoryObj } from '@storybook/svelte'
import { ReceiptRefund as ReceiptRefundSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: ReceiptRefundSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ReceiptRefundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptRefund: Story = {}
