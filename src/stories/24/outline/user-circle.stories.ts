import type { Meta, StoryObj } from '@storybook/svelte'
import UserCircleSvelte from '../../../lib/24/outline/user-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: UserCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserCircle: Story = {}
