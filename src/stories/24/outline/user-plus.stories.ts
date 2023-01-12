import type { Meta, StoryObj } from '@storybook/svelte'
import { UserPlus as UserPlusSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: UserPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserPlus: Story = {}
