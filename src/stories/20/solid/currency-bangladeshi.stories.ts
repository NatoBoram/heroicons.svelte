import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyBangladeshi as CurrencyBangladeshiSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CurrencyBangladeshiSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyBangladeshiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyBangladeshi: Story = {}
