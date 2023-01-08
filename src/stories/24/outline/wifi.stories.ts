import type { Meta, StoryObj } from '@storybook/svelte'
import { Wifi as WifiSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: WifiSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<WifiSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Wifi: Story = {}
