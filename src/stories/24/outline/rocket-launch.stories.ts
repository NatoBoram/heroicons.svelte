import type { Meta, StoryObj } from '@storybook/svelte'
import { RocketLaunch as RocketLaunchSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: RocketLaunchSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RocketLaunchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RocketLaunch: Story = {}
