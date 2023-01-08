import type { Meta, StoryObj } from '@storybook/svelte'
import { BookmarkSquare as BookmarkSquareSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BookmarkSquareSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookmarkSquareSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BookmarkSquare: Story = {}
