import type { Meta, StoryObj } from '@storybook/svelte'
import WifiSvelte from '../../../lib/24/solid/wifi.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: WifiSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WifiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wifi: Story = {}
