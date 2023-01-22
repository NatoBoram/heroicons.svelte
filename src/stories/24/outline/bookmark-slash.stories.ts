import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSlashSvelte from '../../../lib/24/outline/bookmark-slash.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BookmarkSlashSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSlash: Story = {}
