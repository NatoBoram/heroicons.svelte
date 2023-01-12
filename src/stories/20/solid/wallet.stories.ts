import type { Meta, StoryObj } from '@storybook/svelte'
import { Wallet as WalletSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: WalletSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<WalletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wallet: Story = {}
