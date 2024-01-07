import type { Meta, StoryObj } from '@storybook/svelte'
import DeviceTabletSvelte from '../../../lib/16/solid/device-tablet.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: DeviceTabletSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<DeviceTabletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DeviceTablet: Story = {}
