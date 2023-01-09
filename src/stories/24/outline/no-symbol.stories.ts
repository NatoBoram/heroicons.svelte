import type { Meta, StoryObj } from '@storybook/svelte'
import { NoSymbol as NoSymbolSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: NoSymbolSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<NoSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const NoSymbol: Story = {}