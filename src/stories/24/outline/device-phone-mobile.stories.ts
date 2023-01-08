import type { Meta, StoryObj } from '@storybook/svelte'
import { DevicePhoneMobile as DevicePhoneMobileSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: DevicePhoneMobileSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<DevicePhoneMobileSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const DevicePhoneMobile: Story = {}
