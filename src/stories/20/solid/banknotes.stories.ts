import type { Meta, StoryObj } from '@storybook/svelte'
import { Banknotes as BanknotesSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BanknotesSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BanknotesSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Banknotes: Story = {}
