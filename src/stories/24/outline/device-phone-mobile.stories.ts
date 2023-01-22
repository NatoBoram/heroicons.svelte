import type { Meta, StoryObj } from '@storybook/svelte'
import DevicePhoneMobileSvelte from '../../../lib/24/outline/device-phone-mobile.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: DevicePhoneMobileSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DevicePhoneMobileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DevicePhoneMobile: Story = {}
