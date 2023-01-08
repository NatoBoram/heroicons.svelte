import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyPound as CurrencyPoundSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: CurrencyPoundSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyPoundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyPound: Story = {}
