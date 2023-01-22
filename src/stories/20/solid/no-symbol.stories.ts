import type { Meta, StoryObj } from '@storybook/svelte'
import NoSymbolSvelte from '../../../lib/20/solid/no-symbol.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: NoSymbolSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<NoSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const NoSymbol: Story = {}
