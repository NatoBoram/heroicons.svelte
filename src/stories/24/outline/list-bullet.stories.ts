import type { Meta, StoryObj } from '@storybook/svelte'
import ListBulletSvelte from '../../../lib/24/outline/list-bullet.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: ListBulletSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ListBulletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ListBullet: Story = {}
