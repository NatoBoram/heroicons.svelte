import type { Meta, StoryObj } from '@storybook/svelte'
import ListBulletSvelte from '../../../lib/20/solid/list-bullet.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ListBulletSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ListBulletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ListBullet: Story = {}
