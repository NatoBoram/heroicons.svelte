import type { Meta, StoryObj } from '@storybook/svelte'
import ListBulletSvelte from '../../../lib/16/solid/list-bullet.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ListBulletSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ListBulletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ListBullet: Story = {}
