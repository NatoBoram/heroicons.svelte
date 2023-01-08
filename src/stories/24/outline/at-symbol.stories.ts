import type { Meta, StoryObj } from '@storybook/svelte'
import { AtSymbol as AtSymbolSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: AtSymbolSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AtSymbolSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AtSymbol: Story = {}
