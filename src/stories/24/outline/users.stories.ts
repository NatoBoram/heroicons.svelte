import type { Meta, StoryObj } from '@storybook/svelte'
import { Users as UsersSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: UsersSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UsersSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Users: Story = {}
