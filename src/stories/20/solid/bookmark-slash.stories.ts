import type { Meta, StoryObj } from '@storybook/svelte'
import { BookmarkSlash as BookmarkSlashSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BookmarkSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookmarkSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSlash: Story = {}
