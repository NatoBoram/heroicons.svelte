import type { Meta, StoryObj } from '@storybook/svelte'
import ReceiptPercentSvelte from '../../../lib/20/solid/receipt-percent.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ReceiptPercentSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ReceiptPercentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptPercent: Story = {}
