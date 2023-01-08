import type { Meta, StoryObj } from '@storybook/svelte'
import { ReceiptPercent as ReceiptPercentSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ReceiptPercentSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ReceiptPercentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptPercent: Story = {}
