import type { Meta, StoryObj } from '@storybook/svelte'
import { UserGroup as UserGroupSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: UserGroupSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserGroupSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserGroup: Story = {}
