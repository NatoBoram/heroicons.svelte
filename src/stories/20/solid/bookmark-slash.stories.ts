import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSlashSvelte from '../../../lib/20/solid/bookmark-slash.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BookmarkSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookmarkSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSlash: Story = {}
