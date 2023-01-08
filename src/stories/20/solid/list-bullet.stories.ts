import type { Meta, StoryObj } from '@storybook/svelte'
import { ListBullet as ListBulletSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: ListBulletSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ListBulletSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const ListBullet: Story = {}
