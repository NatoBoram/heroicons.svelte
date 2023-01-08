import type { Meta, StoryObj } from '@storybook/svelte'
import { UserPlus as UserPlusSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: UserPlusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserPlus: Story = {}
