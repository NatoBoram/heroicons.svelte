import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSlashSvelte from '../../../lib/16/solid/bookmark-slash.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BookmarkSlashSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BookmarkSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSlash: Story = {}
