import type { Meta, StoryObj } from '@storybook/svelte'
import UserPlusSvelte from '../../../lib/24/outline/user-plus.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: UserPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserPlus: Story = {}
