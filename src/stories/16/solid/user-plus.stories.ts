import type { Meta, StoryObj } from '@storybook/svelte'
import UserPlusSvelte from '../../../lib/16/solid/user-plus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: UserPlusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<UserPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserPlus: Story = {}
