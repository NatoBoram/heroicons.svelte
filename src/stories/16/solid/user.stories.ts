import type { Meta, StoryObj } from '@storybook/svelte'
import UserSvelte from '../../../lib/16/solid/user.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: UserSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<UserSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const User: Story = {}
