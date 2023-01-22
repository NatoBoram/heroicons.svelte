import type { Meta, StoryObj } from '@storybook/svelte'
import AtSymbolSvelte from '../../../lib/24/solid/at-symbol.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: AtSymbolSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AtSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AtSymbol: Story = {}
