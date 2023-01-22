import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSquareSvelte from '../../../lib/24/solid/bookmark-square.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BookmarkSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSquare: Story = {}
