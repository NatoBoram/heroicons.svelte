import type { Meta, StoryObj } from '@storybook/svelte'
import UserGroupSvelte from '../../../lib/16/solid/user-group.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: UserGroupSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<UserGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserGroup: Story = {}
