import type { Meta, StoryObj } from '@storybook/svelte'
import DeviceTabletSvelte from '../../../lib/24/solid/device-tablet.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: DeviceTabletSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DeviceTabletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DeviceTablet: Story = {}
