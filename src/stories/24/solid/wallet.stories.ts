import type { Meta, StoryObj } from '@storybook/svelte'
import WalletSvelte from '../../../lib/24/solid/wallet.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: WalletSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WalletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wallet: Story = {}
