import type { Meta, StoryObj } from '@storybook/svelte'
import AtSymbolSvelte from '../../../lib/16/solid/at-symbol.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: AtSymbolSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<AtSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AtSymbol: Story = {}
