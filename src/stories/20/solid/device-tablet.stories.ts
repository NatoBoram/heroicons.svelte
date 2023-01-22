import type { Meta, StoryObj } from '@storybook/svelte'
import DeviceTabletSvelte from '../../../lib/20/solid/device-tablet.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: DeviceTabletSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DeviceTabletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DeviceTablet: Story = {}
