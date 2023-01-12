import type { Meta, StoryObj } from '@storybook/svelte'
import { ReceiptRefund as ReceiptRefundSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: ReceiptRefundSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ReceiptRefundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptRefund: Story = {}
