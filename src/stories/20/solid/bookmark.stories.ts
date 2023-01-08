import type { Meta, StoryObj } from '@storybook/svelte'
import { Bookmark as BookmarkSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: BookmarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BookmarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Bookmark: Story = {}
