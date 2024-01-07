import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSquareSvelte from '../../../lib/16/solid/bookmark-square.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BookmarkSquareSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BookmarkSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSquare: Story = {}
