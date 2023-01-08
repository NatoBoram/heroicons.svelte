import type { Meta, StoryObj } from '@storybook/svelte'
import { BookmarkSlash as BookmarkSlashSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BookmarkSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSlash: Story = {}
