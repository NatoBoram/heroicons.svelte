import type { Meta, StoryObj } from '@storybook/svelte'
import QrCodeSvelte from '../../../lib/20/solid/qr-code.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: QrCodeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<QrCodeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QrCode: Story = {}
