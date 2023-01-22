import type { Meta, StoryObj } from '@storybook/svelte'
import UserMinusSvelte from '../../../lib/24/outline/user-minus.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: UserMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserMinus: Story = {}
