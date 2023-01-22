import type { Meta, StoryObj } from '@storybook/svelte'
import WifiSvelte from '../../../lib/20/solid/wifi.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: WifiSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<WifiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wifi: Story = {}
