import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyPound as CurrencyPoundSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: CurrencyPoundSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<CurrencyPoundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyPound: Story = {}
