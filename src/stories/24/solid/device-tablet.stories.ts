import type { Meta, StoryObj } from '@storybook/svelte'
import { DeviceTablet as DeviceTabletSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: DeviceTabletSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DeviceTabletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DeviceTablet: Story = {}
