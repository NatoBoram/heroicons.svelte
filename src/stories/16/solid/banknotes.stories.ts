import type { Meta, StoryObj } from '@storybook/svelte'
import BanknotesSvelte from '../../../lib/16/solid/banknotes.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BanknotesSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BanknotesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Banknotes: Story = {}
