import type { Meta, StoryObj } from '@storybook/svelte'
import { BookmarkSquare as BookmarkSquareSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BookmarkSquareSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSquare: Story = {}
