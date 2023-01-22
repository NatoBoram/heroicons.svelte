import type { Meta, StoryObj } from '@storybook/svelte'
import UserCircleSvelte from '../../../lib/20/solid/user-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: UserCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UserCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserCircle: Story = {}
