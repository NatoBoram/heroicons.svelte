import type { Meta, StoryObj } from '@storybook/svelte'
import UsersSvelte from '../../../lib/16/solid/users.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: UsersSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<UsersSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Users: Story = {}
