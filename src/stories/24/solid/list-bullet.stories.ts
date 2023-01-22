import type { Meta, StoryObj } from '@storybook/svelte'
import ListBulletSvelte from '../../../lib/24/solid/list-bullet.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: ListBulletSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<ListBulletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ListBullet: Story = {}
