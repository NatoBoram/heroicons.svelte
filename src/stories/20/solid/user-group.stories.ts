import type { Meta, StoryObj } from '@storybook/svelte'
import UserGroupSvelte from '../../../lib/20/solid/user-group.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: UserGroupSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UserGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserGroup: Story = {}
