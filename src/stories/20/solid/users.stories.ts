import type { Meta, StoryObj } from '@storybook/svelte'
import { Users as UsersSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: UsersSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UsersSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Users: Story = {}
