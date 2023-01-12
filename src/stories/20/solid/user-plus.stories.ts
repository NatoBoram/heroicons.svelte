import type { Meta, StoryObj } from '@storybook/svelte'
import { UserPlus as UserPlusSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: UserPlusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UserPlusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserPlus: Story = {}
