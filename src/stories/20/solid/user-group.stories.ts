import type { Meta, StoryObj } from '@storybook/svelte'
import { UserGroup as UserGroupSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: UserGroupSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UserGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserGroup: Story = {}
