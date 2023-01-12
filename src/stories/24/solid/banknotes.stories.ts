import type { Meta, StoryObj } from '@storybook/svelte'
import { Banknotes as BanknotesSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BanknotesSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BanknotesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Banknotes: Story = {}
