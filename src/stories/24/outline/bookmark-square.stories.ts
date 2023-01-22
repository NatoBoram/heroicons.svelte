import type { Meta, StoryObj } from '@storybook/svelte'
import BookmarkSquareSvelte from '../../../lib/24/outline/bookmark-square.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BookmarkSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSquare: Story = {}
