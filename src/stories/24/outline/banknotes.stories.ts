import type { Meta, StoryObj } from '@storybook/svelte'
import { Banknotes as BanknotesSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BanknotesSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BanknotesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Banknotes: Story = {}
