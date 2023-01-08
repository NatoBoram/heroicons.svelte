import type { Meta, StoryObj } from '@storybook/svelte'
import { UserCircle as UserCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: UserCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserCircle: Story = {}
