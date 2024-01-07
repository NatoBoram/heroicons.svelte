import type { Meta, StoryObj } from '@storybook/svelte'
import UserMinusSvelte from '../../../lib/16/solid/user-minus.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: UserMinusSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<UserMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserMinus: Story = {}
