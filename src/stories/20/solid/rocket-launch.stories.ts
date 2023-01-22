import type { Meta, StoryObj } from '@storybook/svelte'
import RocketLaunchSvelte from '../../../lib/20/solid/rocket-launch.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: RocketLaunchSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RocketLaunchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RocketLaunch: Story = {}
