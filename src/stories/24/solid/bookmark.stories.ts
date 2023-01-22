import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSvelte from '../../../lib/24/solid/bookmark.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BookmarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bookmark: Story = {}
