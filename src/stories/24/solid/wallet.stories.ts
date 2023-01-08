import type { Meta, StoryObj } from '@storybook/svelte'
import { Wallet as WalletSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: WalletSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WalletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wallet: Story = {}
