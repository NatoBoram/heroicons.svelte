import type { Meta, StoryObj } from '@storybook/svelte'
import { DeviceTablet as DeviceTabletSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: DeviceTabletSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<DeviceTabletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DeviceTablet: Story = {}
