import type { Meta, StoryObj } from '@storybook/svelte'
import RocketLaunchSvelte from '../../../lib/24/outline/rocket-launch.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: RocketLaunchSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RocketLaunchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RocketLaunch: Story = {}
