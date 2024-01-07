import type { Meta, StoryObj } from '@storybook/svelte'
import WalletSvelte from '../../../lib/16/solid/wallet.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: WalletSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<WalletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wallet: Story = {}
