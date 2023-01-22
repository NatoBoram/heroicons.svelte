import type { Meta, StoryObj } from '@storybook/svelte'
import AtSymbolSvelte from '../../../lib/20/solid/at-symbol.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: AtSymbolSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<AtSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AtSymbol: Story = {}
