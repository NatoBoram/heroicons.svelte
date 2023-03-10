import type { Meta, StoryObj } from '@storybook/svelte'
import QrCodeSvelte from '../../../lib/24/solid/qr-code.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: QrCodeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<QrCodeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QrCode: Story = {}
