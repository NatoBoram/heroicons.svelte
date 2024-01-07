import type { Meta, StoryObj } from '@storybook/svelte'
import UserCircleSvelte from '../../../lib/16/solid/user-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: UserCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<UserCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserCircle: Story = {}
