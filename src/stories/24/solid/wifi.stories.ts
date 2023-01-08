import type { Meta, StoryObj } from '@storybook/svelte'
import { Wifi as WifiSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: WifiSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WifiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wifi: Story = {}
