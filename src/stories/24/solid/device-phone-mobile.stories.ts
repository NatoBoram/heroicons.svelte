import type { Meta, StoryObj } from '@storybook/svelte'
import { DevicePhoneMobile as DevicePhoneMobileSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: DevicePhoneMobileSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DevicePhoneMobileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DevicePhoneMobile: Story = {}
