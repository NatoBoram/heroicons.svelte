import type { Meta, StoryObj } from '@storybook/svelte'
import { Bookmark as BookmarkSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BookmarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BookmarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bookmark: Story = {}
