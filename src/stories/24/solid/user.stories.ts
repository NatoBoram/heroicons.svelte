import type { Meta, StoryObj } from '@storybook/svelte'
import UserSvelte from '../../../lib/24/solid/user.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: UserSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const User: Story = {}
