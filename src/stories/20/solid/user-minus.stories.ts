import type { Meta, StoryObj } from '@storybook/svelte'
import { UserMinus as UserMinusSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: UserMinusSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UserMinusSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const UserMinus: Story = {}
