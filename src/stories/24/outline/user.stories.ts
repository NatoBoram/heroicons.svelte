import type { Meta, StoryObj } from '@storybook/svelte'
import { User as UserSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: UserSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<UserSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const User: Story = {}
