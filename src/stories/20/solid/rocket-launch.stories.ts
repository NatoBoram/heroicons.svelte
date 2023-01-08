import type { Meta, StoryObj } from '@storybook/svelte'
import { RocketLaunch as RocketLaunchSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: RocketLaunchSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RocketLaunchSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const RocketLaunch: Story = {}
