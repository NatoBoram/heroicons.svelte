import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSvelte from '../../../lib/16/solid/bookmark.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BookmarkSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BookmarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bookmark: Story = {}
