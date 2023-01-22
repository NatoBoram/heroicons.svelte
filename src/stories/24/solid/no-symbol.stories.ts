import type { Meta, StoryObj } from '@storybook/svelte'
import NoSymbolSvelte from '../../../lib/24/solid/no-symbol.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: NoSymbolSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<NoSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const NoSymbol: Story = {}
