import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyYen as CurrencyYenSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: CurrencyYenSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyYenSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyYen: Story = {}
