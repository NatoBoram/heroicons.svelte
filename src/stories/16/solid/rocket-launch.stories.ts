import type { Meta, StoryObj } from '@storybook/svelte'
import RocketLaunchSvelte from '../../../lib/16/solid/rocket-launch.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: RocketLaunchSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<RocketLaunchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RocketLaunch: Story = {}
