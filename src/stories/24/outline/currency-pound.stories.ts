import type { Meta, StoryObj } from '@storybook/svelte'
import { CurrencyPound as CurrencyPoundSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: CurrencyPoundSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<CurrencyPoundSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const CurrencyPound: Story = {}
