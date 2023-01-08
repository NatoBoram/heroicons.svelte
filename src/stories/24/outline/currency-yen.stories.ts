import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyYen as CurrencyYenSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: CurrencyYenSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyYenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyYen: Story = {}
