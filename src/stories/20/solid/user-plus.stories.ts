import type { Meta, StoryObj } from '@storybook/svelte'
import UserPlusSvelte from '../../../lib/20/solid/user-plus.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: UserPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UserPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserPlus: Story = {}
