import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSquareSvelte from '../../../lib/20/solid/bookmark-square.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BookmarkSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookmarkSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSquare: Story = {}
