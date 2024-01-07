import type { Meta, StoryObj } from '@storybook/svelte'
import QrCodeSvelte from '../../../lib/16/solid/qr-code.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: QrCodeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<QrCodeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QrCode: Story = {}
