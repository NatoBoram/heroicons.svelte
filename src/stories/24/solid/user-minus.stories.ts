import type { Meta, StoryObj } from '@storybook/svelte'
import { UserMinus as UserMinusSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: UserMinusSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserMinus: Story = {}
