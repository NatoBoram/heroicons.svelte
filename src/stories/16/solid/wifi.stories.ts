import type { Meta, StoryObj } from '@storybook/svelte'
import WifiSvelte from '../../../lib/16/solid/wifi.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: WifiSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<WifiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wifi: Story = {}
