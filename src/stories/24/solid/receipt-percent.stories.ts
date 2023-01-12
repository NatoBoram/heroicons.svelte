import type { Meta, StoryObj } from '@storybook/svelte'
import { ReceiptPercent as ReceiptPercentSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: ReceiptPercentSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ReceiptPercentSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ReceiptPercent: Story = {}
