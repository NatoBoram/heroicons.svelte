import type { Meta, StoryObj } from '@storybook/svelte'
import { BookmarkSquare as BookmarkSquareSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BookmarkSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSquare: Story = {}
