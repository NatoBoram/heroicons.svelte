import type { Meta, StoryObj } from '@storybook/svelte'
import UsersSvelte from '../../../lib/24/solid/users.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: UsersSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UsersSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Users: Story = {}
