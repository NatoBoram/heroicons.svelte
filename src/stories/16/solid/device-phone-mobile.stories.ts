import type { Meta, StoryObj } from '@storybook/svelte'
import DevicePhoneMobileSvelte from '../../../lib/16/solid/device-phone-mobile.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DevicePhoneMobileSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DevicePhoneMobileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DevicePhoneMobile: Story = {}
