import type { Meta, StoryObj } from '@storybook/svelte'
import { QrCode as QrCodeSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: QrCodeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<QrCodeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const QrCode: Story = {}
