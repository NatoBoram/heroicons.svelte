import type { Meta, StoryObj } from '@storybook/svelte'
import DevicePhoneMobileSvelte from '../../../lib/20/solid/device-phone-mobile.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DevicePhoneMobileSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DevicePhoneMobileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DevicePhoneMobile: Story = {}
