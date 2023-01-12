import type { Meta, StoryObj } from '@storybook/svelte'
import { User as UserSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: UserSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<UserSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const User: Story = {}
