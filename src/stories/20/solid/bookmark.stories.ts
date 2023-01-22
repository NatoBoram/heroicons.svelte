import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSvelte from '../../../lib/20/solid/bookmark.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BookmarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookmarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bookmark: Story = {}
