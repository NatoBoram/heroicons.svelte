import type { Meta, StoryObj } from '@storybook/svelte'
import UserGroupSvelte from '../../../lib/24/solid/user-group.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: UserGroupSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserGroup: Story = {}
