import type { Meta, StoryObj } from '@storybook/svelte'
import NoSymbolSvelte from '../../../lib/16/solid/no-symbol.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: NoSymbolSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<NoSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const NoSymbol: Story = {}
